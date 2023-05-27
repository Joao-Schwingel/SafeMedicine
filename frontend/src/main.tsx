import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import './assets/style/global.scss';
import { theme } from './assets/style/theme';
import Routes from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);
