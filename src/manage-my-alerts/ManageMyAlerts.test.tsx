import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import ManageMyAlerts from './ManageMyAlerts';
import {
  EditBusinessPhoneContent,
} from './edit-business-phone/EditBusinessPhone';
import {
  EditHomePhoneContent,
} from './edit-home-phone/EditHomePhone';
import {
  EditMobilePhoneContent,
} from './edit-mobile-phone/EditMobilePhone';
import {
  EditEmailAccountContent,
} from './edit-email-account/EditEmailAccount';

describe('Manage Alert Component', () => {
  test('Render manage-my-alerts page', () => {
    const { getByText } = render(<ManageMyAlerts />);
    expect(getByText('MANAGE MY ALERTS')).toBeInTheDocument();
  });
  test('Click Edit Home Phone button  ', () => {
    jest.spyOn(React, 'useState');

    const { container } = render(<ManageMyAlerts />);
    fireEvent.click(container.querySelectorAll('.btn-link')[2]);
    fireEvent.click(container.querySelectorAll('.btn-link')[0]);
    fireEvent.click(container.querySelectorAll('.btn-link')[3]);
    fireEvent.click(container.querySelectorAll('.btn-link')[1]);
    expect(React.useState).toHaveBeenCalled();
  });

  test('Click OK&Cancel buttons on EditHomePhone', () => {
    const setShowEditHomeModal = jest.fn();
    const setShowEditBusinessPhone = jest.fn();
    const setShowEditMobilePhone = jest.fn();
    const setShowEditEmailAccount = jest.fn();
    const handleCancel = jest.fn();
    const handleSave = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setShowEditHomeModal])
      .mockImplementationOnce((x) => [x, setShowEditBusinessPhone])
      .mockImplementationOnce((x) => [x, setShowEditEmailAccount])
      .mockImplementationOnce((x) => [x, setShowEditMobilePhone]);
    const { container } = render(
      <EditHomePhoneContent
        handleCancel={handleCancel}
        handleSave={handleSave}
      />,
    );
    const buttons = container.querySelectorAll('button');
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
  });

  test('Click OK&Cancel buttons on EditBusinessPhone', () => {
    const setShowEditHomeModal = jest.fn();
    const setShowEditBusinessPhone = jest.fn();
    const setShowEditMobilePhone = jest.fn();
    const setShowEditEmailAccount = jest.fn();
    const handleCancel = jest.fn();
    const handleSave = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setShowEditHomeModal])
      .mockImplementationOnce((x) => [x, setShowEditBusinessPhone])
      .mockImplementationOnce((x) => [x, setShowEditEmailAccount])
      .mockImplementationOnce((x) => [x, setShowEditMobilePhone]);
    const { container } = render(
      <EditBusinessPhoneContent
        handleCancel={handleCancel}
        handleSave={handleSave}
      />,
    );
    const buttons = container.querySelectorAll('button');
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
  });

  test('Click OK&Cancel buttons on EditMobilePhone', () => {
    const setShowEditHomeModal = jest.fn();
    const setShowEditBusinessPhone = jest.fn();
    const setShowEditMobilePhone = jest.fn();
    const setShowEditEmailAccount = jest.fn();
    const handleCancel = jest.fn();
    const handleNext = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setShowEditHomeModal])
      .mockImplementationOnce((x) => [x, setShowEditBusinessPhone])
      .mockImplementationOnce((x) => [x, setShowEditEmailAccount])
      .mockImplementationOnce((x) => [x, setShowEditMobilePhone]);
    const { container } = render(
      <EditMobilePhoneContent
        handleCancel={handleCancel}
        handleNext={handleNext}
      />,
    );
    const buttons = container.querySelectorAll('button');
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
  });

  test('Click OK&Cancel buttons on EditEmailAccount', () => {
    const setShowEditHomeModal = jest.fn();
    const setShowEditBusinessPhone = jest.fn();
    const setShowEditMobilePhone = jest.fn();
    const setShowEditEmailAccount = jest.fn();
    const handleCancel = jest.fn();
    const handleSave = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setShowEditHomeModal])
      .mockImplementationOnce((x) => [x, setShowEditBusinessPhone])
      .mockImplementationOnce((x) => [x, setShowEditEmailAccount])
      .mockImplementationOnce((x) => [x, setShowEditMobilePhone]);
    const { container } = render(
      <EditEmailAccountContent
        handleCancel={handleCancel}
        handleSave={handleSave}
      />,
    );
    const buttons = container.querySelectorAll('button');
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
  });
});
