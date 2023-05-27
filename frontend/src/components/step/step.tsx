import { TextArea } from '@/components/textArea/textArea';
import { ButtonGreen } from '@/components/buttonGreen/buttonGreen';
import styles from './step.module.scss';
//import Symptons from '../../assets/icons/symptoms.svg';
import Symptoms from '../../assets/icons/symptoms.svg';

interface StepProps {
  subtitle: string;
  iconSrc?: string;
}

export const Step = ({ subtitle }: StepProps) => {
  return (
    <div className={styles.section}>
      <img src={'../../assets/icons/symptoms.svg'} />
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <TextArea />
      <ButtonGreen label='Continuar' />
    </div>
  );
};
