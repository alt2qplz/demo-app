import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { Profile } from 'entities/Profile';

export const validateProfileData = (profile?: Profile): ValidateProfileError[] => {
  if (!profile) return [ValidateProfileError.NO_DATA];

  const errors: ValidateProfileError[] = [];

  if (!profile.first || !profile.lastname) errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  if (!profile.age || !Number.isInteger(profile.age)) errors.push(ValidateProfileError.INCORRECT_AGE);
  if (!profile.country) errors.push(ValidateProfileError.INCORRECT_COUNTRY);

  return errors;
};
