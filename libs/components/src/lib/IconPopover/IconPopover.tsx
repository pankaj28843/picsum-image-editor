import {
  Box,
  IconButton,
  Popover,
  PopoverOrigin,
  Tooltip,
} from '@mui/material';
import { useRef, useState } from 'react';

export type IconPopoverProps = {
  icon: React.ReactElement;
  tooltipText: string;
  popoverContent: React.ReactElement;
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
};
export const IconPopover = ({
  icon,
  popoverContent,
  tooltipText,
  anchorOrigin = {
    vertical: 'top',
    horizontal: 'right',
  },
  transformOrigin = {
    vertical: 'top',
    horizontal: 'left',
  },
}: IconPopoverProps) => {
  const anchorEl = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip title={tooltipText}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconButton
            ref={anchorEl}
            onClick={() => setOpen(true)}
            sx={{
              color: 'primary.contrastText',
              width: 'max-content',
              height: 'max-content',
            }}
          >
            {icon}
          </IconButton>
        </Box>
      </Tooltip>
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={anchorEl.current}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        {popoverContent}
      </Popover>
    </>
  );
};
