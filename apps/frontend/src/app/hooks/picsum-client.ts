import { useCallback, useEffect, useMemo, useState } from 'react';

import { PicSumImageDetails } from '../types';
import { delayedPromise } from '../utils';

const TOTAL_COUNT = 10 * 100; // Found it using pagination with limit 100 https://picsum.photos/v2/list?page=10&limit=100

export type PicsumImageOptions = {
  width: number;
  height: number;
  blur?: number;
  grayscale?: boolean;
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

export const usePicSumImagesPaginated = ({
  limit = 20,
  loadDelay = 200,
}: {
  limit?: number;
  loadDelay?: number;
} = {}) => {
  if (limit < 1 || limit > 100) {
    throw new Error('Limit must be between 1 and 100');
  }

  const [images, setImages] = useState<PicSumImageDetails[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = useMemo(() => Math.ceil(TOTAL_COUNT / limit), [limit]);
  const hasNext = useMemo(
    () => currentPage < totalPages,
    [currentPage, totalPages]
  );
  const hasPrevious = useMemo(() => currentPage > 1, [currentPage]);

  const loadPage = useCallback(
    async (page: number) => {
      setLoading(true);
      setErrorMessage(null);
      setCurrentPage(page);

      try {
        const data = await delayedPromise(loadDelay).then(() =>
          fetch(
            `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
          ).then((res) => res.json())
        );
        setImages(data);
      } catch (err) {
        console.error(err);
        setErrorMessage(
          `Error occurred while loading images, please try again.`
        );
      } finally {
        setLoading(false);
      }
    },
    [limit, loadDelay]
  );

  useEffect(() => {
    loadPage(1);
  }, [loadPage, limit]);

  const loadNext = useCallback(
    () => hasNext && loadPage(currentPage + 1),
    [hasNext, loadPage, currentPage]
  );
  const loadPrevious = useCallback(
    () => hasPrevious && loadPage(currentPage - 1),
    [hasPrevious, loadPage, currentPage]
  );

  return {
    images,
    isLoading,
    hasError: !!errorMessage,
    errorMessage,
    totalPages,
    currentPage,
    hasNext,
    hasPrevious,
    loadPage,
    loadNext,
    loadPrevious,
  };
};

export const usePicsumImage = (id: string, options: PicsumImageOptions) => {
  const [isLoading, setLoading] = useState(false);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const url = useMemo(() => getPicsumImageUrl(id, options), [id, options]);

  const loadImage = useCallback(async () => {
    setLoading(true);
    await delayedPromise(200).then(
      () =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => {
            resolve();
            setImage(img);
            setLoading(false);
          };
          img.src = url;
        })
    );
  }, [url]);

  useEffect(() => {
    loadImage();
  }, [loadImage]);

  return {
    isLoading,
    image,
  };
};
