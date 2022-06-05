import { Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';

import { BlurInput, ImageTile } from '@picsum-image-editor/components';

import { usePicsumImageFilters } from '../hooks';

export const EditorPage = () => {
  const [blur, setBlur] = useState(0);
  const [grayscale, setGrayscale] = useState(false);
  const [[width, height], setSize] = useState([500, 500]);
  const [imageId, setImageId] = useState(
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
          maxWidth: '400px',
        }}
      >
        <BlurInput min={0} max={10} initialValue={blur} onChange={setBlur} />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
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
