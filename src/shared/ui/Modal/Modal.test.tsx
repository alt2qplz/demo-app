import { fireEvent, screen } from '@testing-library/react';
import { Modal } from './Modal';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';

describe('Modal',() => {
  test('Opened Modal', () => {
    renderComponent(<Modal isOpen onClose={() => {}}>TEST</Modal>);
    expect(screen.getByTestId('modal')).toHaveClass('isOpened');
  });

  test('Closed Modal', () => {
    renderComponent(<Modal isOpen={false} onClose={() => {}}>TEST</Modal>);
    expect(screen.getByTestId('modal')).not.toHaveClass('isOpened');
  });

  test('Modal is closing', () => {
    renderComponent(<Modal isOpen onClose={() => {}}>TEST</Modal>);
    const overlay = screen.getByTestId('modal-overlay');
    fireEvent.click(overlay);
    expect(screen.getByTestId('modal')).toHaveClass('isClosing');
  });
});
