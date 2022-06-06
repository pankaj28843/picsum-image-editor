import { Box } from '@mui/system';

export type ImagePreviewProps = {
  imageDataUrl: string;
  width: number;
  height: number;
};
export const ImagePreview = ({
  imageDataUrl,
  width,
  height,
}: ImagePreviewProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          overflow: 'auto',
        }}
      >
        <img src={imageDataUrl} width={width} height={height} alt="" />
      </Box>
    </Box>
  );
};
