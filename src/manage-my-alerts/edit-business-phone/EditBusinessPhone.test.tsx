import { render, fireEvent } from '@testing-library/react';
import { EditBusinessPhoneContent } from './EditBusinessPhone';

describe('EditBusinessPhone Component', () => {
  it('Click cancel button on EditBusinessPhone', () => {
    const handleCancel = jest.fn();
    const handleSave = jest.fn();
    const { container } = render(
      <EditBusinessPhoneContent handleSave={handleSave} handleCancel={handleCancel} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    const btn_element = container.querySelectorAll('#cancel-btn-edit-business-phone');
    expect(btn_element).toHaveLength(1);
    fireEvent.click(btn_element[0], mEvent);
    expect(handleCancel).toBeCalledTimes(1);
  });
  it('Click save button on EditBusinessPhone', () => {
    const handleClose = jest.fn();
    const handleSave = jest.fn();
    const { container } = render(
      <EditBusinessPhoneContent handleSave={handleSave} handleCancel={handleClose} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    const btn_element = container.querySelectorAll('#save-btn-edit-business-phone');
    expect(btn_element).toHaveLength(1);
    fireEvent.click(btn_element[0], mEvent);
    expect(handleSave).toBeCalledTimes(1);
  });
});
