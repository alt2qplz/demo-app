import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
  test('return state', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        error: 'error',
        isLoading: false,
        password: 'pass',
        username: 'user'
      }
    };
    expect(getLoginState(state as StateSchema)).toEqual({
      error: 'error',
      isLoading: false,
      password: 'pass',
      username: 'user'
    });
  });

  // test('state is undefined', () => { // async reducer
  //   expect(getLoginState(undefined as StateSchema)).toEqual({
  //     isLoading: false,
  //     password: '',
  //     username: ''
  //   });
  // });
});
