import ReactDOM from 'react-dom/client';
import './assets/style/global.scss';
import Routes from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Routes />
);
