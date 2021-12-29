import { render, fireEvent } from '@testing-library/react';
import { EditMobilePhoneContent } from './EditMobilePhone';

describe('EditMobilePhone Component', () => {
  it('Click cancel button on EditMobilePhone', () => {
    const handleCancel = jest.fn();
    const handleNext = jest.fn();
    const { getByText } = render(
      <EditMobilePhoneContent handleNext={handleNext} handleCancel={handleCancel} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    fireEvent.click(getByText('Cancel'), mEvent);
    expect(handleCancel).toBeCalledTimes(1);
  });
  it('Click save button on EditMobilePhone', () => {
    const handleClose = jest.fn();
    const handleNext = jest.fn();
    const { getByText } = render(
      <EditMobilePhoneContent handleNext={handleNext} handleCancel={handleClose} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    fireEvent.click(getByText('Next'), mEvent);
    expect(handleNext).toBeCalledTimes(1);
  });
});
