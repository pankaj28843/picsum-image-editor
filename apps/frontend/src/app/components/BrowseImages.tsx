import { Box, Container, Grid, Pagination, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { Loader } from '@picsum-image-editor/components';

import { ImageTileContainer } from '../components';
import { usePicSumImagesPaginated } from '../hooks';

export const BrowseImages = () => {
  const {
    images,
    isLoading,
    totalPages,
    currentPage,
    hasNext,
    hasPrevious,
    loadPage,
    hasError,
    errorMessage,
  } = usePicSumImagesPaginated();

  return (
    <Container
      sx={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {hasError && (
        <Box
          sx={{
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <Typography variant="body1" color="error">
            {errorMessage}
          </Typography>
        </Box>
      )}
      <Box sx={{ overflow: 'auto', flexGrow: 1 }}>
        {isLoading ? (
          <Loader />
        ) : (
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ height: '100%' }}
          >
            {images.map((image) => (
              <Grid item key={image.id}>
                <Link to={`/editor/${image.id}`}>
                  <ImageTileContainer image={image} size={250} />
                </Link>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
      <Box
        sx={{
          height: 'max-content',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        <Pagination
          variant="outlined"
          shape="rounded"
          count={totalPages}
          hideNextButton={!hasNext}
          hidePrevButton={!hasPrevious}
          page={currentPage}
          showFirstButton={true}
          showLastButton={true}
          onChange={(_event, page) => loadPage(page)}
          size="large"
        />
      </Box>
    </Container>
  );
};
