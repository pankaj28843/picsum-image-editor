import CollectionsIcon from '@mui/icons-material/Collections';
import { Box, IconButton, Tooltip } from '@mui/material';

export type BrowseImagesIconProps = {
  onClick: () => void;
};
export const BrowseImagesIcon = ({ onClick }: BrowseImagesIconProps) => {
  return (
    <Tooltip title="Browse Images">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IconButton
          onClick={onClick}
          sx={{
            color: 'primary.contrastText',
            width: 'max-content',
            height: 'max-content',
          }}
        >
          <CollectionsIcon />
        </IconButton>
      </Box>
    </Tooltip>
  );
};
