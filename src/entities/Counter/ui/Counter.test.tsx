import { fireEvent, screen } from '@testing-library/react';
import { Counter } from './Counter';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';
import { StateSchema } from 'app/providers/StoreProvider';

describe('Counter',() => {
  const initialState: DeepPartial<StateSchema> = {
    counter: {
      value: 10
    }
  };

  test('Counter inc', () => {
    renderComponent(<Counter/>, { initialState });
    const incBtn = screen.getByTestId('inc');
    fireEvent.click(incBtn);
    expect(screen.getByTestId('value')).toHaveTextContent('11');
  });

  test('Counter dec', () => {
    renderComponent(<Counter/>, { initialState });
    const decBtn = screen.getByTestId('dec');
    fireEvent.click(decBtn);
    expect(screen.getByTestId('value')).toHaveTextContent('9');
  });
});
