import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { SideNav } from '@picsum-image-editor/components';

import { BrowseImages, EditorIcon } from '../components';
import { useAppSelector } from '../store';

export const HomePage = () => {
  const navigate = useNavigate();
  const { image } = useAppSelector((state) => state.editor);

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <SideNav>
        <EditorIcon onClick={() => navigate('/editor')} disabled={!image} />
      </SideNav>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <BrowseImages />
      </Box>
    </Box>
  );
};
