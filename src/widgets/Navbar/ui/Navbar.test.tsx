import { screen } from '@testing-library/react';
import { Navbar } from './Navbar';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';

describe('Navbar',() => {
  test('Render Navbar', () => {
    renderComponent(<Navbar/>);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});
