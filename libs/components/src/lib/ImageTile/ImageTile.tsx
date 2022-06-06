import { Box, Link } from '@mui/material';

export type ImageTileProps = {
  src: string;
  originalUrl: string;
  author: string;
  width: number;
  height: number;
  onClick?: () => void;
};
export const ImageTile = ({
  src,
  author,
  width,
  height,
  originalUrl,
  onClick,
}: ImageTileProps) => {
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
          cursor: onClick ? 'pointer' : 'default',
        }}
        onClick={onClick}
        src={src}
        alt={author}
      />
      <Link href={originalUrl} target="_blank" color="text.secondary">
        {author}
      </Link>
    </Box>
  );
};
