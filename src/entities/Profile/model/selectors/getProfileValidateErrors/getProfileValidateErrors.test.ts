import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileValidateErrors', () => {
  test('get profile validate errors', () => {
    const validateErrors = [ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE];

    const state: DeepPartial<StateSchema> = {
      profile: { validateErrors }
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors);
  });

  test('state is undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
