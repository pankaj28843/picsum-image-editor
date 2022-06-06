import { Box } from '@mui/material';
import { Navigate } from 'react-router-dom';

import { Loader } from '@picsum-image-editor/components';

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
  const { image: imageDetails, options } = useAppSelector(
    (state) => state.editor
  );
  const { isLoading, imageDataUrl } = usePicsumImage(
    imageDetails?.id || '1',
    options
  );

  if (!imageDetails) {
    return <Navigate to="/" />;
  }

  return (
    <Box
      sx={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Box
        sx={{
          maxWidth: '600px',
          height: 'fit-content',
        }}
      >
        <BlurInputContainer />
        <SizeInputContainer />
        <GrayscaleInputContainer />
        {imageDataUrl && <DownloadImage imageDataUrl={imageDataUrl} />}
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          overflow: 'hidden',
        }}
      >
        {isLoading || !imageDataUrl ? (
          <Loader />
        ) : (
          <ImagePreview
            imageDataUrl={imageDataUrl}
            width={options.width}
            height={options.height}
          />
        )}
      </Box>
    </Box>
  );
};
