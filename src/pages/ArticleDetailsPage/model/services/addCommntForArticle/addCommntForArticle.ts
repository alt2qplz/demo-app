import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import {
  fetchCommentsByArticleId
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
  'articleDetails/addCommentForArticle',
  async (text, thunkAPI) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkAPI;

    const userData = getUserAuthData(getState());
    const articleData = getArticleDetailsData(getState());

    if (!userData || !text || !articleData) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        text,
        articleId: articleData.id,
        userId: userData.id
      });

      if (!response.data) throw new Error();

      dispatch(fetchCommentsByArticleId(articleData.id));

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
