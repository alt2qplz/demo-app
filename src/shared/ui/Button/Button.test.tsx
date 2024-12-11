import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('Button',() => {
  test('Render button', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Render CLEAR button', () => {
    render(<Button theme={'clear'}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});

