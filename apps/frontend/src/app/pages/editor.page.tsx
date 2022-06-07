import CollectionsIcon from '@mui/icons-material/Collections';
import { Box, Divider } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

import { Loader, NavIcon, SideNav } from '@picsum-image-editor/components';

import {
  BlurInputContainer,
  DownloadImage,
  GrayscaleInputContainer,
  ImagePreview,
  SizeInputContainer,
} from '../components';
import { usePicsumImage } from '../hooks';
import { useAppSelector } from '../store';

export const EditorPage = () => {
  const navigate = useNavigate();
  const { image: imageDetails, options } = useAppSelector(
    (state) => state.editor
  );
  const { isLoading, imageBlobUrl } = usePicsumImage(
    imageDetails?.id || '1',
    options
  );

  if (!imageDetails) {
    return <Navigate to="/" />;
  }

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <SideNav>
        <NavIcon
          icon={<CollectionsIcon />}
          tooltipText="Browse Images"
          onClick={() => navigate('/')}
        />
        <Divider />
        <BlurInputContainer />
        <SizeInputContainer />
        <GrayscaleInputContainer />
        <Divider />
        <DownloadImage
          imageBlobUrl={imageBlobUrl}
          filename={`Photo by ${imageDetails.author}.png`}
        />
      </SideNav>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        {isLoading || !imageBlobUrl ? (
          <Loader />
        ) : (
          <ImagePreview
            imageBlobUrl={imageBlobUrl}
            width={options.width}
            height={options.height}
          />
        )}
      </Box>
    </Box>
  );
};
