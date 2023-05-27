import { Header } from '@/components/header/Header';
import styles from './finalPage.module.scss';
import { Step } from '@/components/step/step';

export const FinalPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Step step='final' subtitle='Resultado encontrado' />
    </div>
  );
};
