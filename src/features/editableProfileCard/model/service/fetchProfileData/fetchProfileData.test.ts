import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';
import { Country } from 'entities/Country';

const profile = {
  first: 'Name',
  country: Country.RU,
  age: 29,
  lastname: 'Last',
}; // значение возвращаемое с сервера

describe('fetchProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData); // инстанс класса для тестов асинхронных thunk
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profile }));
    const result = await thunk.callThunk('1'); // вызываем асинхронный thunk с параметрами

    expect(thunk.api.get).toHaveBeenCalled(); // был ли вызван post запрос на сервер
    expect(result.meta.requestStatus).toBe('fulfilled'); // какой результат работы async thunk
    expect(result.payload).toEqual(profile); // что пришло в payload async thunk
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
