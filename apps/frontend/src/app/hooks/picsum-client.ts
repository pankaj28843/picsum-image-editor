import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { PicsumImageDetails, PicsumImageOptions } from '../types';
import { delayedPromise } from '../utils';

const TOTAL_COUNT = 10 * 100; // Found it using pagination with limit 100 https://picsum.photos/v2/list?page=10&limit=100

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

export const usePicsumImagesPaginated = ({
  limit = 20,
  loadDelay = 200,
}: {
  limit?: number;
  loadDelay?: number;
} = {}) => {
  if (limit < 1 || limit > 100) {
    throw new Error('Limit must be between 1 and 100');
  }

  const [images, setImages] = useState<PicsumImageDetails[]>([]);
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

export const usePicsumImage = (
  id: string,
  options: PicsumImageOptions
): {
  image: HTMLImageElement | null;
  imageDataUrl: string | null;
  isLoading: boolean;
  hasError: boolean;
} => {
  const isLoading = useRef(false);
  const hasError = useRef(false);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);

  const resetToLoading = useCallback(() => {
    isLoading.current = true;
    hasError.current = false;
    setImageDataUrl(null);
    setImage(null);
  }, []);

  const loadImage = useCallback(
    async (url: string) => {
      resetToLoading();
      try {
        const imgData = await fetch(url).then((res) => res.blob());
        const dataUrl = URL.createObjectURL(imgData);
        setImageDataUrl(dataUrl);

        const img = new Image();
        img.src = dataUrl;
        setImage(img);
      } catch (err) {
        console.error(err);
        hasError.current = true;
      } finally {
        isLoading.current = false;
      }
    },
    [resetToLoading]
  );

  const url = useMemo(() => getPicsumImageUrl(id, options), [id, options]);

  const debounceTimerId = useRef<number | null>(null);

  useEffect(() => {
    resetToLoading();
    if (debounceTimerId.current) {
      clearTimeout(debounceTimerId.current);
    }
    debounceTimerId.current = window.setTimeout(() => loadImage(url), 200);
  }, [resetToLoading, loadImage, url]);

  return {
    isLoading: isLoading.current,
    hasError: hasError.current,
    image: image,
    imageDataUrl: imageDataUrl,
  };
};
