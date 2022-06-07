import DownloadIcon from '@mui/icons-material/Download';
import { Box } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NavIcon } from './NavIcon';

export default {
  title: 'Atoms/NavIcon',
  component: NavIcon,
  args: {},
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof NavIcon>;

const Template: ComponentStory<typeof NavIcon> = (args) => (
  <Box sx={{ bgcolor: 'primary.main', width: 'fit-content' }}>
    <NavIcon {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  tooltipText: 'Export Image as PNG',
  icon: <DownloadIcon />,
};
