import { Box, Container } from '@mui/material';
import { useState } from 'react';

import {
  BlurInput,
  GrayscaleInput,
  ImageTile,
  SizeInput,
} from '@picsum-image-editor/components';

import { usePicsumImageFilters } from '../hooks';

export const EditorPage = () => {
  const [blur, setBlur] = useState(0);
  const [grayscale, setGrayscale] = useState(false);
  const [[width, height], setSize] = useState([500, 500]);
  const [imageId, _setImageId] = useState(
    Math.floor(1 + 1000 * Math.random()).toString()
  );
  const imageUrl = usePicsumImageFilters(imageId, {
    width,
    height,
    blur,
    grayscale,
  });

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
          overflow: 'auto',
        }}
      >
        <ImageTile
          src={imageUrl}
          width={width}
          height={height}
          author="Picsum"
        />
      </Box>
    </Container>
  );
};
