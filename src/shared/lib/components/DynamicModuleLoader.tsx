import React, { useEffect } from 'react';
import {
  ReduxStoreWithReducerManager,
  StateSchemaKey
} from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [key in StateSchemaKey]?: Reducer;
}

interface DynamicModuleLoaderProps {
  reducers: ReducersList,
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = (props) => {
  const {
    removeAfterUnmount = true
  } = props;
  const store = useStore() as ReduxStoreWithReducerManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(props.reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
      dispatch({ type: `@INIT ${name} FORM` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(props.reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@REMOVE ${name} FORM` }); // remove срабатывает на след диспатч, так стейт обновляется только при диспатче
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return <>{props.children}</>;
};
