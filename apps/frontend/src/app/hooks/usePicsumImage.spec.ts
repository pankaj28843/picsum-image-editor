import { renderHook } from '@testing-library/react-hooks';

import { usePicsumImage } from './usePicsumImage';

describe('usePicsumImage()', () => {
  it('should return a valid image data url', () => {
    const { result } = renderHook(() =>
      usePicsumImage('912', { width: 100, height: 100 })
    );
    expect(result.current).toBeDefined();
    expect(result.current.hasError).toBe(false);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.imageBlobUrl).toBeDefined();
  });
});
