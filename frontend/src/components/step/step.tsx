import { TextArea } from '@/components/textArea/textArea';
import { ButtonGreen } from '@/components/buttonGreen/buttonGreen';
import styles from './step.module.scss';
import Symptoms from '@/assets/icons/symptoms';

interface StepProps {
  subtitle: string;
  step: string;
}

export const Step = ({ subtitle, step }: StepProps) => {
  return (
    <div className={styles.section}>
      {step == 'sintomas' && <Symptoms />}
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <TextArea />
      <ButtonGreen label='Continuar' />
    </div>
  );
};
