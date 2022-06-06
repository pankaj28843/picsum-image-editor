import FilterBAndWIcon from '@mui/icons-material/FilterBAndW';
import { Box } from '@mui/material';

import { GrayscaleInput, IconPopover } from '@picsum-image-editor/components';

import { updateGrayscale, useAppDispatch, useAppSelector } from '../store';

export const GrayscaleInputContainer = () => {
  const dispatch = useAppDispatch();
  const { grayscale } = useAppSelector((state) => state.editor.options);

  const setGrayscale = (value: boolean) => dispatch(updateGrayscale(value));

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
          <GrayscaleInput initialValue={grayscale} onChange={setGrayscale} />
        </Box>
      }
    ></IconPopover>
  );
};
