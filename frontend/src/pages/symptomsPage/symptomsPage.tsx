import Layout from '@/components/layout/layout';
import languageValues from '@/utils/language';
import { useHistory } from 'react-router-dom';

export default function SymptomsPage() {
  const history = useHistory();
  return (
    <Layout
      buttonClick={() => {
        history.push('/diagnostico');
      }}
      buttonLabel={languageValues.buttons.next}
      k='symptoms'
      label={languageValues.symptoms.label}
      breadcrumb={[
        { label: languageValues.landingPage.title, link: '/' },
        { label: languageValues.symptoms.title },
      ]}
    />
  );
}
