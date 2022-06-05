import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';
import debounce from 'lodash/debounce';
import { useEffect, useMemo, useState } from 'react';

export type SizeInputProps = {
  initialValue: {
    width: number;
    height: number;
  };
  onChange: (value: { width: number; height: number }) => void;
};

const isValidNumber = (value: number) => !isNaN(value) && value >= 1;

export const SizeInput = ({ initialValue, onChange }: SizeInputProps) => {
  const debouncedOnChange = useMemo(() => debounce(onChange, 500), [onChange]);

  const [width, setWidth] = useState(initialValue.width);
  const [height, setHeight] = useState(initialValue.height);

  const [keepAspectRatio, setKeepAspectRatio] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(width / height);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onWidthChange = debounce((value: number) => {
    if (!isValidNumber(value)) {
      return;
    }
    if (keepAspectRatio) {
      setHeight(Math.floor(value / aspectRatio));
    }
    setWidth(value);
  }, 100);

  const onHeightChange = debounce((value: number) => {
    if (!isValidNumber(value)) {
      return;
    }
    if (keepAspectRatio) {
      setWidth(Math.floor(value * aspectRatio));
    }
    setHeight(value);
  }, 100);

  useEffect(() => {
    setAspectRatio(width / height);
    if (width !== initialValue.width || height !== initialValue.height) {
      debouncedOnChange({ width, height });
    }
  }, [width, height, debouncedOnChange, initialValue]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          width: 'fit-content',
          height: '100%',
        }}
      >
        <Typography
          sx={{
            padding: '20px',
            verticalAlign: 'middle',
          }}
          variant="body2"
          color="text.primary"
        >
          Size:
        </Typography>
      </Box>
      <Box>
        <FormControlLabel
          control={
            <Checkbox
              checked={keepAspectRatio}
              onChange={(e) => setKeepAspectRatio(e.target.checked)}
            />
          }
          label="Preserve Aspect Ratio"
        />
      </Box>
      <Box>
        <TextField
          sx={{ maxWidth: '100px' }}
          label="Width"
          type="number"
          value={width}
          onChange={(e) => onWidthChange(parseInt(e.target.value, 10))}
        />
      </Box>
      <Box>
        <TextField
          sx={{ maxWidth: '100px' }}
          label="Height"
          type="number"
          value={height}
          onChange={(e) => onHeightChange(parseInt(e.target.value, 10))}
        />
      </Box>
    </Box>
  );
};
