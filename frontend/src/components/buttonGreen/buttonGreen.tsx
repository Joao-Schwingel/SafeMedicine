import { Link } from 'react-router-dom';
import styles from './buttonGreen.module.scss';

interface ButtonGreenProps {
  label: string;
  step: string;
}

export const ButtonGreen = ({ label, step }: ButtonGreenProps) => {
  return step == 'sintomas' ? (
    <Link to='/diagnostico' style={{ textDecoration: 'none', width: '100%' }}>
      <button className={styles.button}>{label}</button>
    </Link>
  ) : (
    <Link to='/final' style={{ textDecoration: 'none', width: '100%' }}>
      <button className={styles.button}>{label}</button>
    </Link>
  );
};
