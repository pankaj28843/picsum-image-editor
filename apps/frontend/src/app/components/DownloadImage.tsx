import DownloadIcon from '@mui/icons-material/Download';
import { Box, IconButton, Tooltip } from '@mui/material';

export type DownloadImageProps = {
  imageBlobUrl: string | null;
  filename?: string;
};
export const DownloadImage = ({
  imageBlobUrl,
  filename = 'Untitled.png',
}: DownloadImageProps) => {
  const onDownloadClick = () => {
    if (!imageBlobUrl) {
      return;
    }

    const a = document.createElement('a');
    a.href = imageBlobUrl;
    // a.href = data;
    a.target = '_blank';
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <Tooltip title="Export Image as PNG">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IconButton
          onClick={onDownloadClick}
          disabled={!imageBlobUrl}
          sx={{
            color: 'primary.contrastText',
            width: 'max-content',
            height: 'max-content',
          }}
        >
          <DownloadIcon />
        </IconButton>
      </Box>
    </Tooltip>
  );
};
