import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SizeInput } from './SizeInput';

export default {
  title: 'Molecules/SizeInput',
  component: SizeInput,
  args: {
    initialValue: { width: 1000, height: 1000 },
  },
  argTypes: { onChange: { action: 'Value Changed' } },
} as ComponentMeta<typeof SizeInput>;

const Template: ComponentStory<typeof SizeInput> = (args) => (
  <SizeInput {...args} />
);

export const Default = Template.bind({});
Default.args = {};
