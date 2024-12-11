import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
  test('get readonly', () => {
    const readonly = true;

    const state: DeepPartial<StateSchema> = {
      profile: { readonly }
    };
    expect(getProfileReadonly(state as StateSchema)).toEqual(readonly);
  });

  test('state is undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
});
