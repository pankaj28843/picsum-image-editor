import { Theme, ThemeOptions, createTheme } from '@mui/material';

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#08b2b2',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f50057',
    },
  },
};

export const theme: Theme = createTheme(themeOptions);
