import { ThemeProvider } from '@mui/material';

import { theme } from '../src/theme';
import '../src/theme.scss';

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
