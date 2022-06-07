import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { PicsumImageDetails } from '../types';
import { RootState } from './types';

export type EditorState = {
  image: PicsumImageDetails | null;
  options: {
    width: number;
    height: number;
    blur: number;
    grayscale: boolean;
  };
};

export const initialState: Readonly<EditorState> = {
  image: null,
  options: {
    width: 1000,
    height: 1000,
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
      options: { ...initialState.options },
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
    updateSize: (
      state,
      action: PayloadAction<{ width: number; height: number }>
    ) => ({
      ...state,
      options: {
        ...state.options,
        width: action.payload.width,
        height: action.payload.height,
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
  updateSize,
  updateGrayscale,
} = editorSlice.actions;

export const selectEditorState = (state: RootState) => state.editor;

export const editorReducer = editorSlice.reducer;
