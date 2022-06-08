import { PicsumImageInfo } from '../types';
import {
  EditorState,
  editorSlice,
  initialState,
  resetEditor,
  updateBlur,
  updateGrayscale,
  updateHeight,
  updateImage,
  updateSize,
  updateWidth,
} from './editorSlice';

const TEST_IMAGE_1: PicsumImageInfo = {
  id: '91',
  author: 'Jennifer Trovato',
  width: 3504,
  height: 2336,
  url: 'https://unsplash.com/photos/baRYCsjO6z4',
  download_url: 'https://picsum.photos/id/91/3504/2336',
};

const TEST_IMAGE_2: PicsumImageInfo = {
  id: '912',
  author: 'Clem Onojeghuo',
  width: 5616,
  height: 3744,
  url: 'https://unsplash.com/photos/-YMhg0KYgVc',
  download_url: 'https://picsum.photos/id/912/5616/3744',
};

describe('editorSlice', () => {
  let previousState: EditorState;
  beforeEach(() => {
    previousState = {
      image: TEST_IMAGE_1,
      options: { width: 400, height: 856, blur: 7, grayscale: true },
    };
  });
  describe('resetEditor', () => {
    it('should return the initial state', () => {
      const state = editorSlice.reducer(previousState, resetEditor());
      expect(state).toEqual(initialState);
    });
  });

  describe('updateImage', () => {
    it('should set the image, and reset filters if image id is different', () => {
      const state = editorSlice.reducer(
        previousState,
        updateImage(TEST_IMAGE_2)
      );
      expect(state.image).toEqual(TEST_IMAGE_2);
      expect(state.options).toEqual(initialState.options);
    });
    it('should set the image, and reset filters if image id is the same', () => {
      const state = editorSlice.reducer(
        previousState,
        updateImage(TEST_IMAGE_1)
      );
      expect(state.image).toEqual(TEST_IMAGE_1);
      expect(state.options).toEqual(initialState.options);
    });
  });

  describe('updateBlur', () => {
    it('should set the blur', () => {
      const state = editorSlice.reducer(previousState, updateBlur(8));
      expect(state.options).toEqual({
        ...previousState.options,
        blur: 8,
      });
    });
  });

  describe('updateWidth', () => {
    it('should set the width', () => {
      const state = editorSlice.reducer(previousState, updateWidth(800));
      expect(state.options).toEqual({
        ...previousState.options,
        width: 800,
      });
    });
  });

  describe('updateHeight', () => {
    it('should set the height', () => {
      const state = editorSlice.reducer(previousState, updateHeight(800));
      expect(state.options).toEqual({
        ...previousState.options,
        height: 800,
      });
    });
  });

  describe('updateSize', () => {
    it('should set the size', () => {
      const state = editorSlice.reducer(
        previousState,
        updateSize({ width: 800, height: 800 })
      );
      expect(state.options).toEqual({
        ...previousState.options,
        width: 800,
        height: 800,
      });
    });
  });

  describe('updateGrayscale', () => {
    it('should be able to set the grayscale to true', () => {
      const state = editorSlice.reducer(previousState, updateGrayscale(true));
      expect(state.options).toEqual({
        ...previousState.options,
        grayscale: true,
      });
    });

    it('should be able to set the grayscale to false', () => {
      const state = editorSlice.reducer(previousState, updateGrayscale(false));
      expect(state.options).toEqual({
        ...previousState.options,
        grayscale: false,
      });
    });
  });
});
