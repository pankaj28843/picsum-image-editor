import { ImageTile } from '@picsum-image-editor/components';

import { getPicsumImageUrl } from '../hooks';
import { PicsumImageDetails } from '../types';

export type ImageTileContainerProps = {
  image: PicsumImageDetails;
  size: number;
};
export const ImageTileContainer = ({
  image,
  size,
}: ImageTileContainerProps) => {
  const imageTileUrl = getPicsumImageUrl(image.id, {
    width: size,
    height: size,
    // blur: Math.random() < 0.1 ? 11 * Math.random() : 0,
    // grayscale: Math.random() < 0.1,
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
