import { useCallback, useEffect, useState } from 'react';

import { PicsumImageInfo } from '../types';
import { getPicsumImageInfoUrl } from '../utils';

export const usePicsumImageInfo = (
  id: string
): {
  isLoading: boolean;
  hasError: boolean;
  imageInfo: PicsumImageInfo | null;
  errorMessage: string | null;
} => {
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [imageInfo, setImageInfo] = useState<PicsumImageInfo | null>(null);

  const resetState = useCallback(() => {
    setLoading(true);
    setErrorMessage(null);
    setImageInfo(null);
  }, []);

  const loadImageInfo = useCallback(async () => {
    setLoading(true);

    try {
      const url = getPicsumImageInfoUrl(id);
      const response = await fetch(url);

      if (response.ok) {
        const info = await response.json();
        setImageInfo(info);
      } else {
        throw new Error(`Error loading image info: ${response.status}`);
      }
    } catch (err: unknown) {
      console.error(err);
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Unknown error occurred while loading image info.'
      );
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    resetState();
    if (!id) {
      return;
    }
    loadImageInfo();
  }, [id, loadImageInfo, resetState]);

  return {
    isLoading,
    hasError: !!errorMessage,
    errorMessage,
    imageInfo,
  };
};
