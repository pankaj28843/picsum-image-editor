import { IconButton, Popover, PopoverOrigin, Tooltip } from '@mui/material';
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
    vertical: 'bottom',
    horizontal: 'left',
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
        <IconButton ref={anchorEl} onClick={() => setOpen(true)}>
          {icon}
        </IconButton>
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
