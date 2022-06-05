import { Box, Container } from '@mui/material';
import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import {
  BlurInput,
  GrayscaleInput,
  SizeInput,
} from '@picsum-image-editor/components';

import { ImagePreview } from '../components/ImagePreview';

export const EditorPage = () => {
  const [blur, setBlur] = useState(0);
  const [grayscale, setGrayscale] = useState(false);
  const [[width, height], setSize] = useState([1080, 600]);
  const { imageId } = useParams();

  if (!imageId) {
    return <Navigate to="/" />;
  }

  return (
    <Container
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
        <BlurInput min={0} max={10} initialValue={blur} onChange={setBlur} />
        <SizeInput
          initialValue={{ height, width }}
          onChange={({ height, width }) => {
            setSize([width, height]);
          }}
        />
        <GrayscaleInput initialValue={grayscale} onChange={setGrayscale} />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          overflow: 'hidden',
        }}
      >
        <ImagePreview {...{ id: imageId, width, height, blur, grayscale }} />
      </Box>
    </Container>
  );
};
