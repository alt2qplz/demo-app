import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
  children?: React.ReactNode,
  initialState?: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
  const {
    children,
    initialState,
    asyncReducers
  } = props;


  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject,
  );

  return <Provider store={store}>
    {children}
  </Provider>;
};
