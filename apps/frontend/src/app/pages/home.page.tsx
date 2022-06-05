import { Grid } from '@mui/material';

import { ImageTileContainer } from '../components';
import { usePicSumImages } from '../hooks';

export const HomePage = () => {
  const { images, isLoading } = usePicSumImages(1);
  return (
    <>
      <h1>Images</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Grid container spacing={2}>
          {images.map((image) => (
            <Grid item key={image.id}>
              <ImageTileContainer image={image} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
