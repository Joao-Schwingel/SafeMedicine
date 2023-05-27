import styles from './buttonGreen.module.scss';

interface ButtonGreenProps {
  label: string;
}

export const ButtonGreen = ({ label }: ButtonGreenProps) => {
  return <button className={styles.button}>{label}</button>;
};
