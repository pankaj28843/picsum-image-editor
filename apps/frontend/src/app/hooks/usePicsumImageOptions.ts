import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { PicsumImageOptions } from '../types';
import { parseImageOptions } from '../utils';

const imageOptionsReducer = (
  acc: { [key: string]: string },
  [key, value]: [key: string, value: string | number | boolean | undefined]
) => {
  if (value !== undefined) {
    acc[key] = value.toString();
  }
  return acc;
};

export const usePicsumImageOptions = (): {
  imageOptions: PicsumImageOptions;
  updateImageOptions: (update: Partial<PicsumImageOptions>) => void;
} => {
  const [searchParams, setSearchParams] = useSearchParams();
  const imageOptions = parseImageOptions(searchParams);

  const updateImageOptions = useCallback(
    (update: Partial<PicsumImageOptions>) => {
      const oldOptions = Object.entries(imageOptions).reduce(
        imageOptionsReducer,
        {} as { [key: string]: string }
      );
      const newOptions = Object.entries(update).reduce(
        imageOptionsReducer,
        oldOptions
      );
      setSearchParams(newOptions, { replace: true });
    },
    [imageOptions, setSearchParams]
  );

  return {
    imageOptions,
    updateImageOptions,
  };
};
