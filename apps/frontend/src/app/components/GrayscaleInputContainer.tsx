import FilterBAndWIcon from '@mui/icons-material/FilterBAndW';
import { Box } from '@mui/material';

import { GrayscaleInput, IconPopover } from '@picsum-image-editor/components';

import { usePicsumImageOptions } from '../hooks';

export const GrayscaleInputContainer = () => {
  const {
    imageOptions: { grayscale },
    updateImageOptions,
  } = usePicsumImageOptions();
  const onGrayscaleChange = (value: boolean) =>
    updateImageOptions({ grayscale: value });

  return (
    <IconPopover
      icon={<FilterBAndWIcon />}
      tooltipText="Change grayscale"
      popoverContent={
        <Box
          sx={{
            minWidth: '300px',
            height: 'fit-content',
            padding: '0.5rem',
          }}
        >
          <GrayscaleInput
            initialValue={!!grayscale}
            onChange={onGrayscaleChange}
          />
        </Box>
      }
    ></IconPopover>
  );
};
