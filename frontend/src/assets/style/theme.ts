import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: { main: '#009c97', dark: '#006a66' },
    secondary: {
      main: '#ffffff',
      dark: '#fefefe',
      contrastText: '#005288',
    },
    error: { main: '#d71249' },
    warning: { main: '#f9a74b' },
  },
});
