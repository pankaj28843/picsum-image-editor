import { Box } from '@mui/system';

export type ImagePreviewProps = {
  imageBlobUrl: string;
  width: number;
  height: number;
};
export const ImagePreview = ({
  imageBlobUrl,
  width,
  height,
}: ImagePreviewProps) => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        src={imageBlobUrl}
        width={width}
        height={height}
        alt=""
        style={{ padding: '10px', display: 'block' }}
      />
    </Box>
  );
};
