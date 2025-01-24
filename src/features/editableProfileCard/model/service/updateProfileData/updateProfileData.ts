import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { Profile } from 'entities/Profile';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const formData = getProfileForm(getState());

    const validateErrors = validateProfileData(formData);
    if (validateErrors.length) return rejectWithValue(validateErrors);

    try {
      const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

      if (!response.data) throw new Error();

      return response.data;
    } catch (e) {
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);
