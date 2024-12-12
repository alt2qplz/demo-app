import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getAddCommentFormText } from '../../selectors/addCommentFormSelectors';
import { getArticleDetailsData } from 'entities/Article';

export const sendComment = createAsyncThunk<
  Comment,
  void,
  ThunkConfig<string>
>(
  'addCommentForm/sendComment',
  async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkAPI;

    const userData = getUserAuthData(getState());
    const text = getAddCommentFormText(getState());
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

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
