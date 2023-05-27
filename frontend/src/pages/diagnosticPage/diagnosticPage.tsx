import Layout from '@/components/layout/layout';
import { ConsultContext } from '@/contexts/consult/ConsultContext';
import languageValues from '@/utils/language';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

export default function DiagnosysPage() {
  const history = useHistory();
  const { sendConsult } = useContext(ConsultContext);
  return (
    <Layout
      buttonClick={() => {
        sendConsult().then(() => {
          history.push('/resposta');
        });
      }}
      buttonLabel={languageValues.buttons.send}
      k='diagnosys'
      label={languageValues.diagnosys.label}
      breadcrumb={[
        { label: languageValues.landingPage.title, link: '/' },
        { label: languageValues.symptoms.title, link: '/sintomas' },
        { label: languageValues.diagnosys.title },
      ]}
    />
  );
}
