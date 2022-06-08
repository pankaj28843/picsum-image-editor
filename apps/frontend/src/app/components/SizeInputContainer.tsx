import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { Box } from '@mui/material';

import { IconPopover, SizeInput } from '@picsum-image-editor/components';

import { usePicsumImageOptions } from '../hooks';

export const SizeInputContainer = () => {
  const {
    imageOptions: { width, height },
    updateImageOptions,
  } = usePicsumImageOptions();
  const onSizechange = ({ width, height }: { width: number; height: number }) =>
    updateImageOptions({ width, height });

  return (
    <IconPopover
      icon={<AspectRatioIcon />}
      tooltipText="Resize image"
      popoverContent={
        <Box
          sx={{
            minWidth: '300px',
            height: 'fit-content',
            padding: '0.5rem',
          }}
        >
          <SizeInput initialValue={{ width, height }} onChange={onSizechange} />
        </Box>
      }
    ></IconPopover>
  );
};
