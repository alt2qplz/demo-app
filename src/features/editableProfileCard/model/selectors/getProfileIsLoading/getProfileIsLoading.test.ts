import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
  test('get isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { isLoading: true }
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });

  test('state is undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
