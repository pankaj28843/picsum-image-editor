import { PicsumImageOptions } from './types';

export const delayedPromise = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const getPicsumImageUrl = (id: string, options: PicsumImageOptions) => {
  const width = Math.floor(options.width);
  const height = Math.floor(options.height);
  const params = new URLSearchParams();

  if (options.blur !== undefined) {
    const blur = Math.floor(options.blur);
    if (blur && blur > 0 && blur <= 10) {
      params.append('blur', blur.toString());
    }
  }
  if (options.grayscale) {
    params.append('grayscale', 'true');
  }

  const url = `https://picsum.photos/id/${id}/${width}/${height}?${params.toString()}`;

  return url;
};
