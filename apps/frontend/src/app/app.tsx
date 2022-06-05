import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Link,
  Toolbar,
} from '@mui/material';
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
        <Box
          sx={{
            flexGrow: 1,
            flexDirection: 'row',
            height: 'fit-content',
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
                to="/editor"
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
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            overflow: 'auto',
            py: '10px',
          }}
        >
          <Container fixed>
            <Routes>
              <Route path="/browse-images" element={<HomePage />} />
              <Route path="/editor" element={<EditorPage />} />

              <Route
                path="*"
                element={<Navigate to="/browse-images" replace />}
              />
            </Routes>
          </Container>
        </Box>
      </Box>
    </>
  );
}
