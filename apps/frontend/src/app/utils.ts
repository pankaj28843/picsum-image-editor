import { PicsumImageOptions } from './types';

export const delayedPromise = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const getPicsumImageInfoUrl = (id: string) =>
  `https://picsum.photos/id/${id}/info`;

export const getPicsumImageUrl = (
  id: string,
  options: PicsumImageOptions
): string => {
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

  const queryParamsString = params.toString();
  const url = `https://picsum.photos/id/${id}/${width}/${height}`;

  if (queryParamsString) {
    return `${url}?${queryParamsString}`;
  } else {
    return url;
  }
};

export const parseImageOptions = (
  params: URLSearchParams
): PicsumImageOptions => {
  const width = parseInt(params.get('width') || '0', 10) || 500;
  const height = parseInt(params.get('height') || '0', 10) || 500;
  const blur = parseInt(params.get('blur') || '0', 10) || undefined;
  const grayscale = params.get('grayscale')?.toLocaleLowerCase() === 'true';

  return { width, height, blur, grayscale };
};
