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
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [imageBlobUrl, setImageBlobUrl] = useState<string | null>(null);

  const resetToLoading = useCallback(() => {
    setLoading(true);
    setError(false);
    setImageBlobUrl(null);
  }, []);

  const loadImage = useCallback(
    async (url: string) => {
      resetToLoading();
      try {
        const response = await fetch(url);
        if (response.ok) {
          const blob = await response.blob();
          const blobUrl = URL.createObjectURL(blob);
          setImageBlobUrl(blobUrl);
        } else {
          throw new Error(`Error loading image: ${response.status}`);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    },
    [resetToLoading]
  );

  const url = useMemo(() => getPicsumImageUrl(id, options), [id, options]);

  const debounceTimerId = useRef<number | null>(null);

  useEffect(() => {
    if (debounceTimerId.current) {
      clearTimeout(debounceTimerId.current);
    }
    debounceTimerId.current = window.setTimeout(() => loadImage(url), 200);
  }, [loadImage, url]);

  return {
    isLoading,
    hasError,
    imageBlobUrl: imageBlobUrl,
  };
};
