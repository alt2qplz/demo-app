import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { Article } from 'entities/Article';
import { articlesPageReducer } from '../slices/articlesPageSlice';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

describe('articlePageSlice', () => {
  const state: DeepPartial<ArticlesPageSchema> = {
    isLoading: false,
    entities: {
      '2': { id: '2', }
    },
    ids: ['2'],
  };

  test('test with replace: true', () => {
    expect(articlesPageReducer(
      state as ArticlesPageSchema,
      fetchArticlesList.fulfilled([{ id: '1' } as Article], '', { replace: true })
    )).toEqual({
      isLoading: false,
      entities: {
        '1': { id: '1', }
      },
      ids: ['1'],
      hasMore: false,
    });
  });

  test('test with replace: false', () => {
    expect(articlesPageReducer(
      state as ArticlesPageSchema,
      fetchArticlesList.fulfilled([{ id: '1' } as Article], '', { replace: false })
    )).toEqual({
      isLoading: false,
      entities: {
        '2': { id: '2' },
        '1': { id: '1' },
      },
      ids: ['2', '1'],
      hasMore: false,
    });
  });
});