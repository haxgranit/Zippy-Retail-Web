import { render, fireEvent } from '@testing-library/react';
import { EditEmailAccountContent } from './EditEmailAccount';

describe('EditEmailAccount Component', () => {
  it('Click cancel button on EditEmailAccount', () => {
    const handleCancel = jest.fn();
    const handleSave = jest.fn();
    const { container } = render(
      <EditEmailAccountContent handleSave={handleSave} handleCancel={handleCancel} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    const btn_element = container.querySelectorAll('#cancel-btn-edit-email-account');
    expect(btn_element).toHaveLength(1);
    fireEvent.click(btn_element[0], mEvent);
    expect(handleCancel).toBeCalledTimes(1);
  });
  it('Click save button on EditEmailAccount', () => {
    const handleClose = jest.fn();
    const handleSave = jest.fn();
    const { container } = render(
      <EditEmailAccountContent handleSave={handleSave} handleCancel={handleClose} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    const btn_element = container.querySelectorAll('#save-btn-edit-email-account');
    expect(btn_element).toHaveLength(1);
    fireEvent.click(btn_element[0], mEvent);
    expect(handleSave).toBeCalledTimes(1);
  });
});
