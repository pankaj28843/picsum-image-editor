import { DownloadDoneOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useRef } from 'react';

import { Loader } from '@picsum-image-editor/components';

import { usePicsumImage } from '../hooks';

export type ImagePreviewProps = {
  id: string;
  width: number;
  height: number;
  blur: number;
  grayscale: boolean;
};
export const ImagePreview = ({
  id,
  width,
  height,
  blur,
  grayscale,
}: ImagePreviewProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { image, isLoading } = usePicsumImage(id, {
    width,
    height,
    blur,
    grayscale,
  });

  const onDownloadClick = () => {
    if (!canvasRef.current) {
      return;
    }
    const data = canvasRef.current.toDataURL('image/png');
    const filename = 'untitled.png';
    const a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
  };

  useEffect(() => {
    if (image && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.imageSmoothingEnabled = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0);
      }
    }
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      {!isLoading && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            marginBottom: '10px',
            height: 'fit-content',
          }}
        >
          <Button
            onClick={onDownloadClick}
            color="primary"
            variant="contained"
            endIcon={<DownloadDoneOutlined />}
          >
            Download Image
          </Button>
        </Box>
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <Box
          sx={{
            flexGrow: 1,
            overflow: 'auto',
          }}
        >
          <canvas ref={canvasRef} width={width} height={height}></canvas>
        </Box>
      )}
    </Box>
  );
};
