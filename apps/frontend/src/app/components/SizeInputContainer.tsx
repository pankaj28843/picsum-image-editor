import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { Box } from '@mui/material';

import { IconPopover, SizeInput } from '@picsum-image-editor/components';

import { updateSize, useAppDispatch, useAppSelector } from '../store';

export const SizeInputContainer = () => {
  const dispatch = useAppDispatch();
  const { height, width } = useAppSelector((state) => state.editor.options);

  const setSize = (size: { width: number; height: number }) =>
    dispatch(updateSize(size));

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
          <SizeInput initialValue={{ width, height }} onChange={setSize} />
        </Box>
      }
    ></IconPopover>
  );
};
