import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';

describe('Sidebar',() => {
  test('Render Sidebar', () => {
    renderComponent(<Sidebar/>);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toggle', () => {
    renderComponent(<Sidebar/>);
    const toggleBtn = screen.getByTestId('toggle-btn');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});

