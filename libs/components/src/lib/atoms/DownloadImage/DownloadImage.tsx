import DownloadIcon from '@mui/icons-material/Download';

import { NavIcon } from '@picsum-image-editor/components';

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
    a.target = '_blank';
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <NavIcon
      icon={<DownloadIcon />}
      tooltipText="Export Image as PNG"
      onClick={onDownloadClick}
      disabled={!imageBlobUrl}
    />
  );
};
