import { Grid } from '@mui/material';

import { Loader } from '@picsum-image-editor/components';

import { ImageTileContainer } from '../components';
import { usePicSumImages } from '../hooks';

export const HomePage = () => {
  const { images, isLoading } = usePicSumImages(1);
  return isLoading ? (
    <Loader />
  ) : (
    <Grid container spacing={2} alignContent="center">
      {images.map((image) => (
        <Grid item key={image.id}>
          <ImageTileContainer image={image} size={250} />
        </Grid>
      ))}
    </Grid>
  );
};
