import React, { ReactNode } from 'react';
import i18nForTest from 'shared/config/i18n/i18nForTest';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';

export type renderWithRouterOptions = {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const renderComponent = (component: ReactNode, options: renderWithRouterOptions = {}) => {
  const {
    route = '/',
    initialState = {},
    asyncReducers,
  } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState as StateSchema}>
        <I18nextProvider i18n={i18nForTest}>
          {component}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
};
