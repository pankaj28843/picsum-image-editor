import CollectionsIcon from '@mui/icons-material/Collections';
import { Box, Divider, Typography } from '@mui/material';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import {
  DownloadImage,
  ImagePreview,
  Loader,
  NavIcon,
  SideNav,
} from '@picsum-image-editor/components';

import {
  BlurInputContainer,
  GrayscaleInputContainer,
  SizeInputContainer,
} from '../components';
import {
  usePicsumImage,
  usePicsumImageInfo,
  usePicsumImageOptions,
} from '../hooks';

export const EditorPage = () => {
  const { imageId } = useParams();
  const navigate = useNavigate();
  const { imageOptions } = usePicsumImageOptions();

  const {
    imageInfo,
    isLoading: isLoadingImageInfo,
    errorMessage: imageInfoErrorMessage,
  } = usePicsumImageInfo(imageId as string);
  const {
    isLoading: isLoadingImage,
    imageBlobUrl,
    hasError: errorOccuredDuringImageLoad,
  } = usePicsumImage(imageId as string, imageOptions);

  const isLoading = isLoadingImageInfo || isLoadingImage || !imageBlobUrl;
  const errorMessage = imageInfoErrorMessage
    ? imageInfoErrorMessage
    : errorOccuredDuringImageLoad
    ? 'Error loading image'
    : null;

  if (!imageId) {
    return <Navigate to="/" />;
  }

  return (
    <Box sx={{ display: 'flex', height: '100%', overflow: 'hidden' }}>
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
          filename={`Photo by ${imageInfo?.author}.png`}
        />
      </SideNav>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: 'auto',
        }}
      >
        {errorMessage ? (
          <Typography component="h4" color="error">
            {errorMessage}
          </Typography>
        ) : isLoading ? (
          <Loader />
        ) : (
          <ImagePreview
            imageBlobUrl={imageBlobUrl}
            width={imageOptions.width}
            height={imageOptions.height}
          />
        )}
      </Box>
    </Box>
  );
};
