import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageSchema } from '../types/pageSchema';

const initialState: PageSchema = {
  scroll: {},
};

export const pageSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScrollPosition: (state, action: PayloadAction<{ path: string; position: number }>) => {
      state.scroll[action.payload.path] = action.payload.position;
    },
  },
});

export const { actions: pageActions, reducer: pageReducer } = pageSlice;
