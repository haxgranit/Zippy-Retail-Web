import { render, fireEvent } from '@testing-library/react';
import { EditMobilePhoneContent } from './EditMobilePhone';

describe('EditMobilePhone Component', () => {
  it('Click cancel button on EditMobilePhone', () => {
    const handleCancel = jest.fn();
    const handleNext = jest.fn();
    const { container } = render(
      <EditMobilePhoneContent handleNext={handleNext} handleCancel={handleCancel} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    fireEvent.click(container.querySelectorAll('#cancel-btn-edit-mobile-phone')[0], mEvent);
    expect(handleCancel).toBeCalledTimes(1);
  });
  it('Click save button on EditMobilePhone', () => {
    const handleClose = jest.fn();
    const handleNext = jest.fn();
    const { container } = render(
      <EditMobilePhoneContent handleNext={handleNext} handleCancel={handleClose} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    fireEvent.click(container.querySelectorAll('#next-btn-edit-mobile-phone')[0], mEvent);
    expect(handleNext).toBeCalledTimes(1);
  });
});
