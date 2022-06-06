import { debounce } from 'lodash';
import { useMemo } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export const useDebounce = <T extends Function>(value: T, delay: number): T =>
  useMemo(() => debounce(value as never, delay), [value, delay]) as never;
