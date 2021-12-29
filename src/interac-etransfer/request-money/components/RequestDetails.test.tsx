import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RequestDetails from './RequestDetails';

describe('RequestDetail Component', () => {
  it('should render RequestDetail', () => {
    const { getByText } = render(<RequestDetails />);
    expect(getByText('Request Money Details')).toBeInTheDocument();
  });
  it('should render Email Form  when user Has an Email ', () => {
    const initialContact = {
      name: 'test',
      email: 'test@test.com',
      phone: null,
    };
    const setAccountFrom = jest.fn();
    const setContacts = jest.fn();
    const setAccountsData = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [initialContact, setAccountFrom])
      .mockImplementationOnce((x) => [x, setAccountsData])
      .mockImplementationOnce((x) => [x, setContacts]);
    const { container, getByText } = render(<RequestDetails />);
    const emailOrPhoneCheck = container.querySelectorAll('.form-check-input');
    const mockedEvent = { target: { value: JSON.stringify(initialContact) } };
    fireEvent.click(emailOrPhoneCheck[0], mockedEvent);
    expect(getByText('Edit Notification Preferences')).toBeInTheDocument();
  });

  it('should render Text Form  when user Has a Phone ', () => {
    const initialContact = {
      name: 'test',
      email: '',
      phone: '066252255',
    };
    const setAccountFrom = jest.fn();
    const setContacts = jest.fn();
    const setAccountsData = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [initialContact, setAccountFrom])
      .mockImplementationOnce((x) => [x, setAccountsData])
      .mockImplementationOnce((x) => [x, setContacts]);
    const { container, getByText } = render(<RequestDetails />);
    const emailOrPhoneCheck = container.querySelectorAll('.form-check-input');
    const mockedEvent = { target: { value: JSON.stringify(initialContact) } };
    fireEvent.click(emailOrPhoneCheck[1], mockedEvent);
    expect(getByText('Edit Notification Preferences')).toBeInTheDocument();
  });

  it('should render accountFrom with null when no there is no contact ', () => {
    const initialContact = {
      name: 'test',
      email: '',
      phone: '066252255',
    };
    const setAccountFrom = jest.fn();
    const setContacts = jest.fn();
    const setAccountsData = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [initialContact, setAccountFrom])
      .mockImplementationOnce((x) => [x, setAccountsData])
      .mockImplementationOnce((x) => [x, setContacts]);
    const { container, getByText } = render(<RequestDetails />);
    const emailOrPhoneCheck = container.querySelectorAll('.form-check-input');
    const mockedEvent = { target: { value: '' } };
    fireEvent.click(emailOrPhoneCheck[1], mockedEvent);
    expect(getByText('Edit Notification Preferences')).toBeInTheDocument();
  });
  it('should render accountFrom with contact when  chossing  a contact ', () => {
    const initialContact = {
      name: 'test',
      email: 'test@test.com',
      phone: '',
    };
    const setAccountFrom = jest.fn();
    const setContacts = jest.fn();
    const setAccountsData = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [initialContact, setAccountFrom])
      .mockImplementationOnce((x) => [x, setAccountsData])
      .mockImplementationOnce((x) => [x, setContacts]);
    const { container, getByText } = render(<RequestDetails />);
    const emailOrPhoneCheck = container.querySelectorAll('.form-check-input');
    const mockedEvent = { target: { value: JSON.stringify(initialContact) } };
    fireEvent.click(emailOrPhoneCheck[1], mockedEvent);
    expect(getByText('Edit Notification Preferences')).toBeInTheDocument();
  });
  it('should call handleSelect when changing select ', () => {
    const initialContact = {
      name: 'test',
      email: 'test@test.com',
      phone: '',
    };
    const setAccountFrom = jest.fn();
    const setContacts = jest.fn();
    const setAccountsData = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [initialContact, setAccountFrom])
      .mockImplementationOnce((x) => [x, setAccountsData])
      .mockImplementationOnce((x) => [x, setContacts]);
    const { container, getByText } = render(<RequestDetails />);
    const emailOrPhoneCheck = container.querySelectorAll('.form-check-input');
    const mockedEvent = { target: { value: JSON.stringify(initialContact) } };
    fireEvent.click(emailOrPhoneCheck[1], mockedEvent);
    expect(getByText('Edit Notification Preferences')).toBeInTheDocument();
  });
  it('should click next step button', () => {
    const initialContact = {
      name: 'test',
      email: 'test@test.com',
      phone: '',
    };
    const setAccountFrom = jest.fn();
    const setContacts = jest.fn();
    const setAccountsData = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [initialContact, setAccountFrom])
      .mockImplementationOnce((x) => [x, setAccountsData])
      .mockImplementationOnce((x) => [x, setContacts]);
    const setCurrentStep = jest.fn();
    const { container, getByText } = render(<RequestDetails setCurrentStep={setCurrentStep} />);

    fireEvent.change(container.querySelectorAll('.form-select')[0], {
      target: { value: JSON.stringify(initialContact) },
    });
    fireEvent.click(getByText('Send Request'));
    expect(setCurrentStep).toHaveBeenCalled();
  });
  it('should call setAccount when changing Select ', () => {
    const initialContact = {
      id: 1,
      name: 'test',
      email: 'test@test.com',
      phone: '',
    };
    const setAccountFrom = jest.fn();
    const setContacts = jest.fn();
    const setAccountsData = jest.fn();

    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [initialContact, setAccountFrom])
      .mockImplementationOnce((x) => [x, setAccountsData])
      .mockImplementationOnce(() => [[initialContact], setContacts]);
    const { container } = render(<RequestDetails />);
    const emailOrPhoneCheck = container.querySelectorAll('.form-select')[0];

    fireEvent.change(emailOrPhoneCheck, { target: { name: 'test', value: '' } });

    expect(setAccountFrom).toBeCalledWith(undefined);
  });
  it('should call setAccount with null when selected Value is empty ', () => {
    const initialContact = {
      name: 'test',
      email: 'test@test.com',
      phone: '',
    };
    const setAccountFrom = jest.fn();
    const setContacts = jest.fn();
    const setAccountsData = jest.fn();

    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [initialContact, setAccountFrom])
      .mockImplementationOnce((x) => [x, setAccountsData])
      .mockImplementationOnce(() => [[initialContact], setContacts]);
    const { container } = render(<RequestDetails />);
    const emailOrPhoneCheck = container.querySelectorAll('.form-select')[0];

    fireEvent.change(emailOrPhoneCheck, { target: { name: 'test', value: '' } });
    expect(setAccountFrom).toBeCalledWith(undefined);
  });
  it('should not render any select when  Contact is null', () => {
    const initialContact = {
      name: 'test',
      email: 'test@test.com',
      phone: '',
    };
    const setAccountFrom = jest.fn();
    const setContacts = jest.fn();
    const setAccountsData = jest.fn();

    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [initialContact, setAccountFrom])
      .mockImplementationOnce((x) => [x, setAccountsData])
      .mockImplementationOnce(() => [null, setContacts]);
    const { container } = render(<RequestDetails />);
    const emailOrPhoneCheck = container.querySelectorAll('.form-select')[1];
    const options = emailOrPhoneCheck.querySelectorAll('option');
    expect(options.length).toEqual(1);
    expect(options[0].innerHTML).toEqual('Select');
    expect(options[0].value).toEqual('');
  });
});
