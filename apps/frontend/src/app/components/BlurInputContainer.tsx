import LensBlurIcon from '@mui/icons-material/LensBlur';
import { Box } from '@mui/material';

import { BlurInput, IconPopover } from '@picsum-image-editor/components';

import { updateBlur, useAppDispatch, useAppSelector } from '../store';

export const BlurInputContainer = () => {
  const dispatch = useAppDispatch();
  const { blur } = useAppSelector((state) => state.editor.options);

  const setBlur = (value: number) => dispatch(updateBlur(value));

  return (
    <IconPopover
      icon={<LensBlurIcon />}
      tooltipText="Adjust blur"
      popoverContent={
        <Box
          sx={{
            width: '300px',
            height: 'fit-content',
            padding: '0.5rem',
          }}
        >
          <BlurInput min={0} max={10} initialValue={blur} onChange={setBlur} />
        </Box>
      }
    ></IconPopover>
  );
};
