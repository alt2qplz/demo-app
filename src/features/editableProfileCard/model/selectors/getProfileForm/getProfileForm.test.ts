import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';
import { Country } from 'entities/Country';

describe('getProfileForm', () => {
  test('get data', () => {
    const form = {
      first: 'Name',
      country: Country.RU,
      age: 29,
      lastname: 'Last',
    };

    const state: DeepPartial<StateSchema> = {
      profile: { form }
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });

  test('state is undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
