import { PicsumImageOptions } from './types';
import { delayedPromise, getPicsumImageUrl } from './utils';

describe('utils', () => {
  describe('delayedPromise()', () => {
    it('should resolve after given ms', async () => {
      const ms = 10;
      const start = Date.now();
      await delayedPromise(ms);
      const end = Date.now();
      expect(end - start).toBeGreaterThanOrEqual(ms);
    });
  });

  describe('getPicsumImageUrl()', () => {
    it('should return a valid url when blur is `0` and grayscale is `false`', () => {
      const id = '123';
      const options: PicsumImageOptions = {
        width: 100,
        height: 100,
        blur: 0,
        grayscale: false,
      };
      const url = getPicsumImageUrl(id, options);
      expect(url).toBe('https://picsum.photos/id/123/100/100');
    });
    it('should return a valid url when blur is `0` and grayscale is `true`', () => {
      const id = '123';
      const options: PicsumImageOptions = {
        width: 100,
        height: 100,
        blur: 0,
        grayscale: true,
      };
      const url = getPicsumImageUrl(id, options);
      expect(url).toBe('https://picsum.photos/id/123/100/100?grayscale=true');
    });

    it('should return a valid url when blur is nonzero `5` and grayscale is `true`', () => {
      const id = '123';
      const options: PicsumImageOptions = {
        width: 100,
        height: 100,
        blur: 5,
        grayscale: true,
      };
      const url = getPicsumImageUrl(id, options);
      expect(url).toBe(
        'https://picsum.photos/id/123/100/100?blur=5&grayscale=true'
      );
    });
    it('should return a valid url when blur is nonzero `5` and grayscale is `false`', () => {
      const id = '123';
      const options: PicsumImageOptions = {
        width: 100,
        height: 100,
        blur: 5,
        grayscale: false,
      };
      const url = getPicsumImageUrl(id, options);
      expect(url).toBe('https://picsum.photos/id/123/100/100?blur=5');
    });
  });
});
