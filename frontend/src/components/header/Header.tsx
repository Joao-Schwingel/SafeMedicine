import { Link } from 'react-router-dom';
import { ButtonWhite } from '../button/buttonWhite';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <Link to='/' style={{ textDecoration: 'none'}}>
      <div className={styles.header}>
        <ButtonWhite label='Home' />
      </div>
    </Link>
  );
};
