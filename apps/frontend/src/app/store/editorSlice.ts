import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { PicsumImageDetails, PicsumImageOptions } from '../types';
import { RootState } from './types';

export type EditorState = {
  image: PicsumImageDetails | null;
  options: PicsumImageOptions;
};

const initialState: EditorState = {
  image: null,
  options: {
    width: 200,
    height: 200,
    blur: 0,
    grayscale: false,
  },
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    resetEditor: () => ({ ...initialState }),
    updateImage: (state, action: PayloadAction<PicsumImageDetails>) => ({
      ...state,
      image: action.payload,
    }),
    updateBlur: (state, action: PayloadAction<number>) => ({
      ...state,
      options: {
        ...state.options,
        blur: action.payload,
      },
    }),
    updateWidth: (state, action: PayloadAction<number>) => ({
      ...state,
      options: {
        ...state.options,
        width: action.payload,
      },
    }),
    updateHeight: (state, action: PayloadAction<number>) => ({
      ...state,
      options: {
        ...state.options,
        height: action.payload,
      },
    }),
    updateGrayscale: (state, action: PayloadAction<boolean>) => ({
      ...state,
      options: {
        ...state.options,
        grayscale: action.payload,
      },
    }),
  },
});

export const {
  resetEditor,
  updateImage,
  updateBlur,
  updateWidth,
  updateHeight,
  updateGrayscale,
} = editorSlice.actions;

export const selectEditorState = (state: RootState) => state.editor;

export const editorReducer = editorSlice.reducer;
