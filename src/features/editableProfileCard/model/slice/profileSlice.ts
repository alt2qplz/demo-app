import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/editableProfileCardSchema';
import { fetchProfileData } from '../service/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../service/updateProfileData/updateProfileData';
import { Profile } from 'entities/Profile';

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
  form: undefined,
  validateErrors: undefined
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state: ProfileSchema, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
      state.validateErrors = undefined;
    },
    updateForm: (state: ProfileSchema, action: PayloadAction<Profile>) => {
      state.form = { ...state.form, ...action.payload };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.validateErrors = undefined;
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (state, action) => {
        state.validateErrors = undefined;
        state.isLoading = false;
        state.readonly = true;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.validateErrors = action.payload;
      });
  }
});

export const {
  reducer: profileReducer,
  actions: profileActions
} = profileSlice;
