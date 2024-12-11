import { Profile, ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { Country } from 'entities/Country';
import { updateProfileData } from 'entities/Profile';
import { StateSchema } from 'app/providers/StoreProvider';

describe('loginSlice', () => {
  const state: ProfileSchema = {
    readonly: false,
    isLoading: false,
    error: undefined,
    data: {
      username: 'name',
      age: 1,
      lastname: 'last',
      country: Country.RU
    },
    form: {
      username: 'name 123',
      age: 12,
      lastname: 'last',
      country: Country.RU
    },
    validateErrors: undefined
  };

  test('set readonly', () => {
    expect(profileReducer(state, profileActions.setReadonly(true))).toEqual({ ...state, readonly: true });
  });

  test('cancel edit', () => {
    expect(profileReducer(state, profileActions.cancelEdit())).toEqual({
      ...state,
      readonly: true,
      form: {
        username: 'name',
        age: 1,
        lastname: 'last',
        country: Country.RU
      }
    });
  });

  test('update form', () => {
    expect(profileReducer(state, profileActions.updateForm({ username: 'name 321' }))).toEqual({
      ...state,
      form: {
        ...state.form,
        username: 'name 321'
      }
    });
  });

  test('updateProfileData pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.NO_DATA]
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending
    )).toEqual({
      isLoading: true,
      validateErrors: undefined
    });
  });

  test('updateProfileData fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: [ValidateProfileError.NO_DATA]
    };

    const profile: Profile = {
      username: 'name',
      age: 1,
      lastname: 'last',
      country: Country.RU
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(profile, '')
    )).toEqual({
      readonly: true,
      isLoading: false,
      validateErrors: undefined,
      form: profile,
      data: profile
    });
  });
});
