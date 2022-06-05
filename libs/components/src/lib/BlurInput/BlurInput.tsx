import { Box, Slider, Tooltip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export type BlurInputProps = {
  min: number;
  max: number;
  initialValue: number;
  onChange: (value: number) => void;
};

export const BlurInput = ({
  min,
  max,
  initialValue,
  onChange,
}: BlurInputProps) => {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    onChange(value);
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyItems: 'space-between',
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
          Blur:
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Slider
          valueLabelDisplay="auto"
          components={{
            ValueLabel: ValueLabelComponent,
          }}
          aria-label="custom thumb label"
          defaultValue={value}
          min={min}
          max={max}
          onChange={(event, newValue) =>
            setValue(typeof newValue === 'number' ? newValue : newValue[0])
          }
        />
      </Box>
    </Box>
  );
};

const ValueLabelComponent = ({
  children,
  value,
}: {
  children: React.ReactElement;
  value: number;
}) => {
  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
};
