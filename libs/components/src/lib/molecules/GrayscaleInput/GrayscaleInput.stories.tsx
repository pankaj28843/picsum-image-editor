import { ComponentMeta, ComponentStory } from '@storybook/react';

import { GrayscaleInput } from './GrayscaleInput';

export default {
  title: 'Molecules/GrayscaleInput',
  component: GrayscaleInput,
  args: {
    initialValue: false,
  },
  argTypes: { onChange: { action: 'Value Changed' } },
} as ComponentMeta<typeof GrayscaleInput>;

const Template: ComponentStory<typeof GrayscaleInput> = (args) => (
  <GrayscaleInput {...args} />
);

export const Default = Template.bind({});
Default.args = {};
