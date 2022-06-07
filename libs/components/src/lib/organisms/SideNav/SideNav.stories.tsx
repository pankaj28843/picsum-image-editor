import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NavIcon } from '../../atoms';
import { SideNav } from './SideNav';

export default {
  title: 'Organisms/SideNav',
  component: SideNav,
  args: {
    drawerWidth: 200,
  },
} as ComponentMeta<typeof SideNav>;

const Template: ComponentStory<typeof SideNav> = (args) => (
  <SideNav {...args}>
    <Toolbar />
    <Divider />
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <NavIcon
                icon={index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                tooltipText={text}
              />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <NavIcon
                icon={index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                tooltipText={text}
              />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </SideNav>
);

export const Default = Template.bind({});
Default.args = {};
