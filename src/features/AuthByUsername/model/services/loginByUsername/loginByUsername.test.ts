import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername.test', () => {
  test('success login', async () => {
    const userValue = { username: '123', id: '1' }; // значение возвращаемое с сервера

    const thunk = new TestAsyncThunk(loginByUsername); // инстанс класса для тестов асинхронных thunk
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const result = await thunk.callThunk({ username: '123', password: '123' }); // вызываем асинхронный thunk с параметрами

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue)); // проверяем бы ли вызван диспатч с таким параметром
    expect(thunk.dispatch).toHaveBeenCalledTimes(3); // сколько раз был вызван диспатч
    expect(thunk.api.post).toHaveBeenCalled(); // был ли вызван post запрос на сервер
    expect(result.meta.requestStatus).toBe('fulfilled'); // какой результат работы async thunk
    expect(result.payload).toEqual(userValue); // что пришло в payload async thunk
  });

  test('error login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
