import BlurOnIcon from '@mui/icons-material/BlurOn';
import { Box } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconPopover } from './IconPopover';

export default {
  title: 'Organisms/IconPopover',
  component: IconPopover,
  args: {
    icon: <BlurOnIcon />,
    tooltipText: 'Change Blur',
    popoverContent: <Box sx={{ width: '200px', height: '50px' }}>Popup</Box>,
    anchorOrigin: { vertical: 'top', horizontal: 'right' },
    transformOrigin: { vertical: 'bottom', horizontal: 'left' },
  },
} as ComponentMeta<typeof IconPopover>;

const Template: ComponentStory<typeof IconPopover> = (args) => (
  <Box sx={{ bgcolor: 'primary.main', width: 'fit-content' }}>
    <IconPopover {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {};
