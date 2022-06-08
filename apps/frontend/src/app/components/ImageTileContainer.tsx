import { ImageTile } from '@picsum-image-editor/components';

import { PicsumImageInfo } from '../types';
import { getPicsumImageUrl } from '../utils';

export type ImageTileContainerProps = {
  image: PicsumImageInfo;
  size: number;
  onClick?: () => void;
};
export const ImageTileContainer = ({
  image,
  size,
  onClick,
}: ImageTileContainerProps) => {
  const imageTileUrl = getPicsumImageUrl(image.id, {
    width: size,
    height: size,
  });

  return (
    <ImageTile
      src={imageTileUrl}
      author={image.author}
      width={size}
      height={size}
      originalUrl={image.url}
      onClick={onClick}
    />
  );
};
