import { Drawer } from '@mui/material';

export type SideNavProps = {
  children: React.ReactNode;
  drawerWidth?: number;
};

export const SideNav = ({ drawerWidth = 60, children }: SideNavProps) => {
  return (
    <Drawer
      anchor="left"
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          maxWidth: drawerWidth,
          minWidth: 'fit-content',
          boxSizing: 'border-box',
        },
      }}
    >
      {children}
    </Drawer>
  );
};
