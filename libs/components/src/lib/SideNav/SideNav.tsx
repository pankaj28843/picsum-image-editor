import { Drawer } from '@mui/material';

export type SideNavProps = {
  children: React.ReactNode;
};

export const SideNav = ({ children }: SideNavProps) => {
  const drawerWidth = 80;
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
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      {children}
    </Drawer>
  );
};
