import { Theme, ThemeOptions, createTheme } from '@mui/material';
import { pink, teal } from '@mui/material/colors';

export const themeOptions: ThemeOptions = {
  palette: {
    primary: teal,
    secondary: pink,
  },
};

export const theme: Theme = createTheme(themeOptions);
