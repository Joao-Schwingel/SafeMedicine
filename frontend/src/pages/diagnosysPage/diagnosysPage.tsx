import { Header } from '@/components/header/Header';
import styles from './diagnosysPage.module.scss';
import { Step } from '@/components/step/step';

export const DiagnosysPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Step step='diagnostico' subtitle='Qual o diagnóstico encontrado' />
    </div>
  );
};
