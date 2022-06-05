import { Box, CircularProgress } from '@mui/material';

export const Loader = () => (
  <Box
    sx={{
      height: '100%',
      width: '100%',
      display: 'flex',
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <CircularProgress />
  </Box>
);
