import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { PicsumImageDetails } from '../types';
import { delayedPromise } from '../utils';

const TOTAL_COUNT = 10 * 100; // Found it using pagination with limit 100 https://picsum.photos/v2/list?page=10&limit=100

export const usePicsumImagesPagination = ({
  initialPage = 1,
  limit = 30,
  loadDelay = 200,
}: {
  initialPage?: number;
  limit?: number;
  loadDelay?: number;
} = {}): {
  images: PicsumImageDetails[];
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string | null;
  totalPages: number;
  currentPage: number;
  loadPage: (page: number) => Promise<void>;
} => {
  if (limit < 1 || limit > 100) {
    throw new Error('Limit must be between 1 and 100');
  }

  const initialized = useRef(false);

  const [images, setImages] = useState<PicsumImageDetails[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = useMemo(() => Math.ceil(TOTAL_COUNT / limit), [limit]);

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
    if (!initialized.current) {
      loadPage(initialPage);
      initialized.current = true;
    }
  }, [initialized, loadPage, initialPage]);

  return {
    images,
    isLoading,
    hasError: !!errorMessage,
    errorMessage,
    totalPages,
    currentPage,
    loadPage,
  };
};
