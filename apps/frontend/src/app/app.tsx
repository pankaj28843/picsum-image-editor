import { Link, Navigate, Route, Routes } from 'react-router-dom';

import { EditorPage } from './pages/editor.page';
import { HomePage } from './pages/home.page';

export default function App() {
  return (
    <>
      <div>
        <nav
          style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
          }}
        >
          <Link to="/browse-images">Browse Images</Link> |{' '}
          <Link to="/editor">Editor</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/browse-images" element={<HomePage />} />
        <Route path="/editor" element={<EditorPage />} />

        <Route path="*" element={<Navigate to="/browse-images" replace />} />
      </Routes>
    </>
  );
}
