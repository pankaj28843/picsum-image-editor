import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ImageTile } from './ImageTile';

export default {
  title: 'Molecules/ImageTile',
  component: ImageTile,
  args: {
    src: 'https://picsum.photos/id/91/500/500',
    originalUrl: 'https://unsplash.com/photos/baRYCsjO6z4',
    author: 'Jennifer Trovato',
    width: 250,
    height: 250,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof ImageTile>;

const Template: ComponentStory<typeof ImageTile> = (args) => (
  <ImageTile {...args} />
);

export const Default = Template.bind({});
Default.args = {};
