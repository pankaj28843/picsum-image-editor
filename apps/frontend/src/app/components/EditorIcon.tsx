import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton, IconButtonProps, Tooltip } from '@mui/material';

export const EditorIcon = (props: IconButtonProps) => {
  return (
    <Tooltip title="Go Back to Editor">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IconButton
          {...props}
          sx={{
            ...props.sx,
            color: 'primary.contrastText',
            width: 'max-content',
            height: 'max-content',
          }}
        >
          <EditIcon />
        </IconButton>
      </Box>
    </Tooltip>
  );
};
