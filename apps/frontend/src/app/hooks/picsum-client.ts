import { useEffect, useState } from 'react';

import { PicSumImageDetails } from '../types';

const LIMIT = 100;

export const usePicSumImages = (page: number) => {
  const [images, setImages] = useState<PicSumImageDetails[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${LIMIT}`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      })
      .finally(() => setLoading(false));
  }, [page, setImages, setLoading]);

  return { images, isLoading };
};

export const usePicsumImageFilters = (
  id: string,
  options: {
    width: number;
    height: number;
    blur?: number;
    grayscale?: boolean;
  }
) => {
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
