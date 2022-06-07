import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { PicsumImageOptions } from '../types';
import { getPicsumImageUrl } from '../utils';

export const usePicsumImage = (
  id: string,
  options: PicsumImageOptions
): {
  imageBlobUrl: string | null;
  isLoading: boolean;
  hasError: boolean;
} => {
  const isLoading = useRef(false);
  const hasError = useRef(false);
  const [imageBlobUrl, setImageDataUrl] = useState<string | null>(null);

  const resetToLoading = useCallback(() => {
    isLoading.current = true;
    hasError.current = false;
    setImageDataUrl(null);
  }, []);

  const loadImage = useCallback(
    async (url: string) => {
      resetToLoading();
      try {
        const imgData = await fetch(url).then((res) => res.blob());
        const dataUrl = URL.createObjectURL(imgData);
        setImageDataUrl(dataUrl);
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
    imageBlobUrl: imageBlobUrl,
  };
};
