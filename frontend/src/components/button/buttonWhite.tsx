import styles from './buttonWhite.module.scss';

interface ButtonWhiteProps {
  label: string;
}

export const ButtonWhite = ({ label }: ButtonWhiteProps) => {
  return <button className={styles.home}>{label}</button>;
};
