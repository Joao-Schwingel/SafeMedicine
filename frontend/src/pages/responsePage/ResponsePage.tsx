import Layout from '@/components/layout/layout';
import { ConsultContext } from '@/contexts/consult/ConsultContext';
import languageValues from '@/utils/language';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

export default function ResponsePage() {
  const { dispatch } = useContext(ConsultContext);
  const history = useHistory();

  return (
    <Layout
      breadcrumb={[]}
      k='response'
      label='Resposta:'
      buttonLabel={languageValues.buttons.reset}
      buttonClick={() => {
        dispatch({
          type: 'reset',
          payload: undefined,
        });
        history.push('/sintomas');
      }}
    />
  );
}
