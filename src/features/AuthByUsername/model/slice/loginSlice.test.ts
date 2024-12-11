import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  const state: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: 'ERROR'
  };

  test('username', () => {
    expect(loginReducer(state, loginActions.setUsername('user'))).toEqual({ ...state, username: 'user' });
  });

  test('password', () => {
    expect(loginReducer(state, loginActions.setPassword('pass'))).toEqual({ ...state, password: 'pass' });
  });

  test('username', () => {
    expect(loginReducer(state, loginActions.clearError)).toEqual({ ...state, error: undefined });
  });
});
