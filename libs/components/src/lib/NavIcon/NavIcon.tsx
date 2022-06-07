import { Box, IconButton, IconButtonProps, Tooltip } from '@mui/material';

export type NavIconProps = {
  tooltipText: string;
  icon: React.ReactNode;
} & IconButtonProps;

export const NavIcon = (props: NavIconProps) => {
  return (
    <Tooltip title={props.tooltipText}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IconButton
          {...props}
          sx={{
            ...props.sx,
            color: 'primary.contrastText',
            width: 'max-content',
            height: 'max-content',
          }}
        >
          {props.icon}
        </IconButton>
      </Box>
    </Tooltip>
  );
};
