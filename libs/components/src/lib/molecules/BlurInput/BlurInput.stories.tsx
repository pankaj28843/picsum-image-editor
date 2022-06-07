import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BlurInput } from './BlurInput';

export default {
  title: 'Molecules/BlurInput',
  component: BlurInput,
  args: {
    min: 0,
    max: 10,
    initialValue: 1,
  },
  argTypes: { onChange: { action: 'Value Changed' } },
} as ComponentMeta<typeof BlurInput>;

const Template: ComponentStory<typeof BlurInput> = (args) => (
  <BlurInput {...args} />
);

export const Default = Template.bind({});
Default.args = {};
