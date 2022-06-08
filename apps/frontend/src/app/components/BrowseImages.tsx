import { Box, Grid, Pagination, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Loader } from '@picsum-image-editor/components';

import { ImageTileContainer } from '../components';
import { usePicsumImagesPagination } from '../hooks';
import { PicsumImageInfo } from '../types';

export type BrowseImagesProps = {
  currentPage?: number;
  onPageChange?: (page: number) => void;
};

export const BrowseImages = ({
  currentPage = 1,
  onPageChange,
}: BrowseImagesProps) => {
  const navigate = useNavigate();
  const onImageClick = (image: PicsumImageInfo) => {
    navigate(`/editor/${image.id}`);
  };

  const { images, isLoading, totalPages, loadPage, hasError, errorMessage } =
    usePicsumImagesPagination({ currentPage });

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
