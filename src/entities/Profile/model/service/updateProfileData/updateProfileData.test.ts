import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { updateProfileData } from './updateProfileData';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile';

const data = {
  first: 'Name',
  country: Country.RU,
  age: 29,
  lastname: 'Last',
  id: '1'
};

describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(
      updateProfileData,
      { profile: { form: data } }
    );

    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(
      updateProfileData,
      { profile: { form: { ...data, first: '' } } }
    );

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ ValidateProfileError.INCORRECT_USER_DATA ]);
  });

  test('server error', async () => {
    const thunk = new TestAsyncThunk(
      updateProfileData,
      { profile: { form: data } }
    );

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 500 }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ ValidateProfileError.SERVER_ERROR ]);
  });
});
