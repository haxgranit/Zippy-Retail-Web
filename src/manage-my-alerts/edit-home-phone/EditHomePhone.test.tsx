import { render, fireEvent } from '@testing-library/react';
import { EditHomePhoneContent } from './EditHomePhone';

describe('EditHomePhone Component', () => {
  it('Click cancel button on EditHomePhone', () => {
    const handleCancel = jest.fn();
    const handleSave = jest.fn();
    const { container } = render(
      <EditHomePhoneContent handleSave={handleSave} handleCancel={handleCancel} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    const btnElements = container.querySelectorAll('#cancel-btn-edit-home-phone');
    expect(btnElements).toHaveLength(1);
    fireEvent.click(btnElements[0], mEvent);
    expect(handleCancel).toBeCalledTimes(1);
  });
  it('Click save button on EditHomePhone', () => {
    const handleClose = jest.fn();
    const handleSave = jest.fn();
    const { container } = render(
      <EditHomePhoneContent handleSave={handleSave} handleCancel={handleClose} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    const btnElements = container.querySelectorAll('#save-btn-edit-home-phone');
    expect(btnElements).toHaveLength(1);
    fireEvent.click(btnElements[0], mEvent);
    expect(handleSave).toBeCalledTimes(1);
  });
});
