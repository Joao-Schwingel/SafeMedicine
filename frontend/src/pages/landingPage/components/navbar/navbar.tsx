import Logo from '@/assets/icons/logo';
import languageValues from '@/utils/language';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import styles from './navbar.module.scss';

export default function Navbar() {
  const history = useHistory();

  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <Logo />
      </div>
      <div className={styles.center}>
        <a href='#quem-somos'>Quem Somos</a>
        <a href='#quem-somos'>Causas do problema</a>
      </div>
      <div className={styles.right}>
        <Button
          variant='outlined'
          color='secondary'
          onClick={() => {
            history.push('/sintomas');
          }}
        >
          {languageValues.buttons.start}
        </Button>
      </div>
    </div>
  );
}
