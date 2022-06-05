import { AppBar, Box, CssBaseline, Link, Toolbar } from '@mui/material';
import { Navigate, Route, Link as RouterLink, Routes } from 'react-router-dom';

import { EditorPage } from './pages/editor.page';
import { HomePage } from './pages/home.page';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <AppBar position="static">
          <Toolbar>
            <Link
              to="/browse-images"
              component={RouterLink}
              sx={{
                mx: '10px',
                fontSize: '1.1rem',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              Browse Images
            </Link>
            <Link
              to="/editor/1"
              component={RouterLink}
              sx={{
                mx: '10px',
                fontSize: '1.1rem',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              Editor
            </Link>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            flexGrow: 1,
            py: '10px',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              height: '100%',
            }}
          >
            <Routes>
              <Route path="/browse-images" element={<HomePage />} />
              <Route path="/editor/:imageId" element={<EditorPage />} />

              <Route
                path="*"
                element={<Navigate to="/browse-images" replace />}
              />
            </Routes>
          </Box>
        </Box>
      </Box>
    </>
  );
}
