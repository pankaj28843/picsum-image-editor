import { Box, Popover, PopoverOrigin } from '@mui/material';
import { useRef, useState } from 'react';

import { NavIcon } from '../../atoms/';

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
      <Box ref={anchorEl}>
        <NavIcon
          icon={icon}
          tooltipText={tooltipText}
          onClick={() => setOpen(true)}
        />
      </Box>
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
