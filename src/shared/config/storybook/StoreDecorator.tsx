import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { profileReducer } from 'features/editableProfileCard/model/slice/profileSlice';

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList
  // eslint-disable-next-line react/display-name
) => (StoryComponent: Story) => {
  return <StoreProvider initialState={state as StateSchema} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent/>
  </StoreProvider>;
};
