import { render, fireEvent } from '@testing-library/react';
import { EditBusinessPhoneContent } from './EditBusinessPhone';

describe('EditBusinessPhone Component', () => {
  it('Click cancel button on EditBusinessPhone', () => {
    const handleCancel = jest.fn();
    const handleSave = jest.fn();
    const { getByText } = render(
      <EditBusinessPhoneContent handleSave={handleSave} handleCancel={handleCancel} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    fireEvent.click(getByText('Cancel'), mEvent);
    expect(handleCancel).toBeCalledTimes(1);
  });
  it('Click save button on EditBusinessPhone', () => {
    const handleClose = jest.fn();
    const handleSave = jest.fn();
    const { getByText } = render(
      <EditBusinessPhoneContent handleSave={handleSave} handleCancel={handleClose} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    fireEvent.click(getByText('Save'), mEvent);
    expect(handleSave).toBeCalledTimes(1);
  });
});
