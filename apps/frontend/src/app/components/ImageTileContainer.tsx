import { ImageTile } from '@picsum-image-editor/components';

import { usePicsumImageFilters } from '../hooks';
import { PicSumImageDetails } from '../types';

export type ImageTileContainerProps = {
  image: PicSumImageDetails;
  size?: number;
};
export const ImageTileContainer = ({
  image,
  size = 300,
}: ImageTileContainerProps) => {
  const imageTileUrl = usePicsumImageFilters(image.id, {
    width: size,
    height: size,
    blur: Math.random() < 0.1 ? 11 * Math.random() : 0,
    grayscale: Math.random() < 0.1,
  });

  return (
    <ImageTile
      src={imageTileUrl}
      author={image.author}
      width={size}
      height={size}
    />
  );
};
