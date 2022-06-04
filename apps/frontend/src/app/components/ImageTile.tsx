import { usePicsumImageFilters } from '../hooks';
import { PicSumImageDetails } from '../types';

export type ImageTileProps = {
  image: PicSumImageDetails;
  size?: number;
};
export const ImageTile = ({ image, size = 500 }: ImageTileProps) => {
  const imageTileUrl = usePicsumImageFilters(image.id, {
    width: size,
    height: size,
    blur: Math.random() < 0.1 ? 11 * Math.random() : 0,
    grayscale: Math.random() < 0.1,
  });

  return (
    <img
      src={imageTileUrl}
      alt={image.author}
      style={{
        padding: '0.25rem',
        margin: '0.5rem',
        border: 'dashed 2px #ccc',
      }}
    />
  );
};
