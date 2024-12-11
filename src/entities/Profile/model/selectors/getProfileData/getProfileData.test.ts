import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Country } from 'entities/Country';

describe('getProfileData', () => {
  test('get data', () => {
    const data = {
      first: 'Name',
      country: Country.RU,
      age: 29,
      lastname: 'Last',
    };

    const state: DeepPartial<StateSchema> = {
      profile: { data }
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('state is undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
