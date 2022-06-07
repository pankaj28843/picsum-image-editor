import { Box, Checkbox, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export type GrayscaleInputProps = {
  initialValue: boolean;
  onChange: (value: boolean) => void;
};
export const GrayscaleInput = ({
  initialValue,
  onChange,
}: GrayscaleInputProps) => {
  const [grayscale, setGrayscale] = useState(initialValue);

  useEffect(() => {
    if (grayscale !== initialValue) {
      onChange(grayscale);
    }
  }, [grayscale, initialValue, onChange]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
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
          Grayscale:
        </Typography>
      </Box>
      <Box>
        <Checkbox
          checked={grayscale}
          onChange={(e) => setGrayscale(e.target.checked)}
        />
      </Box>
    </Box>
  );
};
