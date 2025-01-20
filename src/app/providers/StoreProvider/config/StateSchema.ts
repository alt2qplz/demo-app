import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { PageSchema } from 'widgets/Page/model/types/pageSchema';
import { rtkApi } from 'shared/api/rtkApi';

export type StateSchema = {
  counter: CounterSchema,
  user: UserSchema,
  page: PageSchema,
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // async reducers
  login?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>,
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  checkHasReducer: (key: StateSchemaKey) => boolean
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithReducerManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema
}
