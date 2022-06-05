import { Box, Typography } from '@mui/material';

export type ImageTileProps = {
  src: string;
  author: string;
  width: number;
  height: number;
};
export const ImageTile = ({ src, author, width, height }: ImageTileProps) => {
  return (
    <Box
      sx={{
        width: 'max-content',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        sx={{
          height,
          width,
          padding: '6px',
          borderRadius: '6px',
          boxShadow: 1,
        }}
        src={src}
        alt={author}
      />
      <Typography variant="body2" color="text.secondary">
        {author}
      </Typography>
    </Box>
  );
};
