import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slices/articlesPageSlice';

jest.mock('../fetchArticlesList/fetchArticlesList');
jest.mock('../../slices/articlesPageSlice');

// Пример использования
const params = new URLSearchParams('search=mockedValue');

describe('initArticlesPage.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 1,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: false
      },
    });

    await thunk.callThunk(params);

    expect(thunk.dispatch).toBeCalledTimes(5);
    expect(fetchArticlesList).toHaveBeenCalledWith({});
    expect(articlesPageActions.initState).toBeCalledTimes(1);
  });

  test('page is inited', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
        _inited: true
      },
    });

    await thunk.callThunk(params);

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
    expect(articlesPageActions.initState).not.toHaveBeenCalled();
  });
});
