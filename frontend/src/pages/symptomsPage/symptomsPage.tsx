import { Header } from '@/components/header/Header';
import styles from './symptomsPage.module.scss';
import { Step } from '@/components/step/step';

export const SymptomsPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Step step='sintomas' subtitle='Descreva os sintomas abaixo' />
    </div>
  );
};
