import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Loader } from './Loader';

export default {
  title: 'Atoms/Loader',
  component: Loader,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => <Loader />;

export const Default = Template.bind({});
