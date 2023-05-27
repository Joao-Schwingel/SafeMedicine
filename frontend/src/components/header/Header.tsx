import { useHistory } from 'react-router-dom';
import { ButtonGreen } from '../buttonGreen/buttonGreen';
import styles from './Header.module.scss';

export const Header = () => {
  const history = useHistory();
  return (
    <div className={styles.header}>
      <ButtonGreen
        onClick={() => {
          history.push('/');
        }} 
        step=''
      >
        Home
      </ButtonGreen>
    </div>
  );
};
