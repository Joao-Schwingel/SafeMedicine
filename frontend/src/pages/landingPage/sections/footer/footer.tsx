import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import style from './footer.module.scss';

export default function Footer() {
  const history = useHistory();

  return (
    <div className={style.root}>
      <svg
        width='1440'
        height='729'
        viewBox='0 0 1440 729'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0 90C799 323.5 1000 0.000329706 1440 0V729C784.5 729 0 729 0 729V90Z'
          fill='#009C97'
        />
      </svg>
      <div className={style.wrapper}>
        teste
        <Button
          variant='outlined'
          color='secondary'
          onClick={() => {
            history.push('/sintomas');
          }}
        >
          Iniciar
        </Button>
      </div>
    </div>
  );
}
