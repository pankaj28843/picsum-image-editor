import DownloadIcon from '@mui/icons-material/Download';
import { IconButton, Tooltip } from '@mui/material';

export type DownloadImageProps = {
  imageDataUrl: string;
  filename?: string;
};
export const DownloadImage = ({
  imageDataUrl,
  filename = 'Untitled.png',
}: DownloadImageProps) => {
  const onDownloadClick = () => {
    const a = document.createElement('a');
    a.href = imageDataUrl;
    // a.href = data;
    a.target = '_blank';
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <Tooltip title="Export Image as PNG">
      <IconButton onClick={onDownloadClick}>{<DownloadIcon />}</IconButton>
    </Tooltip>
  );
};
