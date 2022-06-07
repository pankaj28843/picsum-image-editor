import { Box, Grid, Pagination, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Loader } from '@picsum-image-editor/components';

import { ImageTileContainer } from '../components';
import { usePicsumImagesPagination } from '../hooks';
import { updateImage, useAppDispatch } from '../store';
import { PicsumImageDetails } from '../types';

export type BrowseImagesProps = {
  initialPage?: number;
  onPageChange?: (page: number) => void;
};

export const BrowseImages = ({
  initialPage = 1,
  onPageChange,
}: BrowseImagesProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onImageClick = (image: PicsumImageDetails) => {
    dispatch(updateImage(image));
    navigate('/editor');
  };

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
  } = usePicsumImagesPagination({ initialPage });

  const onMuiPaginationChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    loadPage(page);
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <Box
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
                <ImageTileContainer
                  image={image}
                  size={250}
                  onClick={() => onImageClick(image)}
                />
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
        }}
      >
        <Pagination
          variant="outlined"
          shape="rounded"
          siblingCount={1}
          boundaryCount={1}
          count={totalPages}
          hideNextButton={!hasNext}
          hidePrevButton={!hasPrevious}
          page={currentPage}
          showFirstButton={true}
          showLastButton={true}
          onChange={onMuiPaginationChange}
          size="medium"
          sx={{
            padding: '10px',
          }}
        />
      </Box>
    </Box>
  );
};
