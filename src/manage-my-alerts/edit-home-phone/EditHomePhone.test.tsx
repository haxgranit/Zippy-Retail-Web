import { render, fireEvent } from '@testing-library/react';
import { EditHomePhoneContent } from './EditHomePhone';

describe('EditHomePhone Component', () => {
  it('Click cancel button on EditHomePhone', () => {
    const handleCancel = jest.fn();
    const handleSave = jest.fn();
    const { getByText } = render(
      <EditHomePhoneContent handleSave={handleSave} handleCancel={handleCancel} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    fireEvent.click(getByText('Cancel'), mEvent);
    expect(handleCancel).toBeCalledTimes(1);
  });
  it('Click save button on EditHomePhone', () => {
    const handleClose = jest.fn();
    const handleSave = jest.fn();
    const { getByText } = render(
      <EditHomePhoneContent handleSave={handleSave} handleCancel={handleClose} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    fireEvent.click(getByText('Save'), mEvent);
    expect(handleSave).toBeCalledTimes(1);
  });
});
