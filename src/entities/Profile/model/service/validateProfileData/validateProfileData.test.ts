import { validateProfileData } from './validateProfileData';
import { Country } from 'entities/Country';
import { ValidateProfileError } from '../../types/profile';

const profile = {
  first: 'Name',
  country: Country.RU,
  age: 29,
  lastname: 'Last',
};

describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(profile);
    expect(result).toEqual([]);
  });

  test('name error', async () => {
    const result = validateProfileData({ ...profile, first: '' });
    expect(result).toEqual([ ValidateProfileError.INCORRECT_USER_DATA ]);
  });

  test('age error', async () => {
    const result = validateProfileData({ ...profile, age: 0.5 });
    expect(result).toEqual([ ValidateProfileError.INCORRECT_AGE ]);
  });

  test('country error', async () => {
    const result = validateProfileData({ ...profile, country: undefined });
    expect(result).toEqual([ ValidateProfileError.INCORRECT_COUNTRY ]);
  });

  test('all errors', async () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY
    ]);
  });

  test('undefined', async () => {
    const result = validateProfileData(undefined);
    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });
});
