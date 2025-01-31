import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('get data', () => {
    const error = 'Ошибка';

    const state: DeepPartial<StateSchema> = {
      profile: { error: 'Ошибка' }
    };
    expect(getProfileError(state as StateSchema)).toEqual(error);
  });

  test('get data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { error: undefined }
    };
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });

  test('state is undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
