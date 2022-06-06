import { Box } from '@mui/material';
import { Navigate } from 'react-router-dom';

import {
  BlurInput,
  GrayscaleInput,
  SizeInput,
} from '@picsum-image-editor/components';

import { ImagePreview } from '../components/ImagePreview';
import {
  updateBlur,
  updateGrayscale,
  updateSize,
  useAppDispatch,
  useAppSelector,
} from '../store';

export const EditorPage = () => {
  const dispatch = useAppDispatch();
  const { image, options } = useAppSelector((state) => state.editor);
  const setBlur = (value: number) => dispatch(updateBlur(value));
  const setGrayscale = (value: boolean) => dispatch(updateGrayscale(value));
  const setSize = (size: { width: number; height: number }) =>
    dispatch(updateSize(size));

  if (!image) {
    return <Navigate to="/" />;
  }

  return (
    <Box
      sx={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Box
        sx={{
          maxWidth: '600px',
          height: 'fit-content',
        }}
      >
        <BlurInput
          min={0}
          max={10}
          initialValue={options.blur}
          onChange={setBlur}
        />
        <SizeInput
          initialValue={{ height: options.height, width: options.width }}
          onChange={setSize}
        />
        <GrayscaleInput
          initialValue={options.grayscale}
          onChange={setGrayscale}
        />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          overflow: 'hidden',
        }}
      >
        <ImagePreview {...{ id: image.id, ...options }} />
      </Box>
    </Box>
  );
};
