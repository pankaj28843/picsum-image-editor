import { Box, Slider, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';

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
  const onInputChange = (newValue: number) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyItems: 'space-between',
        alignItems: 'center',
        padding: '10px',
      }}
    >
      <Box
        sx={{
          width: 'max-content',
          height: '100%',
        }}
      >
        <Typography
          sx={{
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
          marginLeft: '20px',
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
            onInputChange(typeof newValue === 'number' ? newValue : newValue[0])
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
