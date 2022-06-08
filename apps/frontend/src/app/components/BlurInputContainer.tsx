import LensBlurIcon from '@mui/icons-material/LensBlur';
import { Box } from '@mui/material';

import { BlurInput, IconPopover } from '@picsum-image-editor/components';

import { usePicsumImageOptions } from '../hooks';

export const BlurInputContainer = () => {
  const {
    imageOptions: { blur },
    updateImageOptions,
  } = usePicsumImageOptions();
  const onBlurChange = (value: number) => updateImageOptions({ blur: value });

  return (
    <IconPopover
      icon={<LensBlurIcon />}
      tooltipText="Adjust blur"
      popoverContent={
        <Box
          sx={{
            minWidth: '300px',
            height: 'fit-content',
            padding: '0.5rem',
          }}
        >
          <BlurInput
            min={0}
            max={10}
            initialValue={blur || 0}
            onChange={onBlurChange}
          />
        </Box>
      }
    ></IconPopover>
  );
};
