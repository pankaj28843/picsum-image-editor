import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ImagePreview } from './ImagePreview';

export default {
  title: 'molecules/ImagePreview',
  component: ImagePreview,
  args: {
    imageBlobUrl: 'https://picsum.photos/id/1015/1000/250',
    width: 1000,
    height: 250,
  },
} as ComponentMeta<typeof ImagePreview>;

const Template: ComponentStory<typeof ImagePreview> = (args) => (
  <ImagePreview {...args} />
);

export const Default = Template.bind({});
Default.args = {};
