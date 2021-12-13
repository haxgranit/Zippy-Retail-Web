import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Form } from 'react-bootstrap';
import React from 'react';
import RequestDetail from './RequestDetails';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('RequestDetail Component', () => {
  it('should render RequestDetail', () => {
    const wrapper = mount(<RequestDetail />);
    const title = wrapper.find('h4');
    expect(title.text()).toEqual('Request Money Details');
  });
  it('should not  render any form in beginging ', () => {
    const wrapper = mount(<RequestDetail />);
    const emailOrPhoneForm = wrapper.find(Form);
    expect(emailOrPhoneForm.exists()).toBeFalsy();
  });
  it('should render Email Form  when user Has an Email ', () => {
    const initialContact = {
      name: 'test',
      email: 'test@test.com',
      phone: null,
    };
    const setAccountFrom = jest.fn();
    const setContacts = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [initialContact, setAccountFrom])
      .mockImplementationOnce((x) => [x, setContacts]);
    const wrapper = mount(<RequestDetail />);
    const emailOrPhoneCheck = wrapper.find(Form.Check);
    const mockedEvent = { target: { value: JSON.stringify(initialContact) } };
    emailOrPhoneCheck.at(0).simulate('click', mockedEvent);
    expect(emailOrPhoneCheck.at(0).props().label).toEqual(
      `Email ${initialContact.email}`,
    );
  });

  it('should render Phone Form  when user Has an Phone ', () => {
    const initialContact = {
      name: 'test',
      email: '',
      phone: '066252255',
    };
    const setAccountFrom = jest.fn();
    const setContacts = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [initialContact, setAccountFrom])
      .mockImplementationOnce((x) => [x, setContacts]);
    const wrapper = mount(<RequestDetail />);
    const emailOrPhoneCheck = wrapper.find(Form.Check);
    const mockedEvent = { target: { value: JSON.stringify(initialContact) } };
    emailOrPhoneCheck.at(0).simulate('click', mockedEvent);
    expect(emailOrPhoneCheck.at(0).props().label).toEqual(
      `Phone ${initialContact.phone}`,
    );
  });

  it('should render accountFrom with null when no chossing any contact ', () => {
    const initialContact = {
      name: 'test',
      email: '',
      phone: '066252255',
    };
    const setAccountFrom = jest.fn();
    const setContacts = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [initialContact, setAccountFrom])
      .mockImplementationOnce((x) => [x, setContacts]);
    const wrapper = mount(<RequestDetail />);
    const emailOrPhoneForm = wrapper.find(Form);
    const emailOrPhoneCheck = wrapper.find(Form.Check);
    const mockedEvent = { target: { value: '' } };
    emailOrPhoneCheck.at(0).simulate('click', mockedEvent);
    expect(emailOrPhoneForm.exists()).toBeFalsy();
  });
  it('should render accountFrom with contact when  chossing any contact ', () => {
    const initialContact = {
      name: 'test',
      email: 'test@test.com',
      phone: '',
    };
    const setAccountFrom = jest.fn();
    const setContacts = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [initialContact, setAccountFrom])
      .mockImplementationOnce((x) => [x, setContacts]);
    const wrapper = mount(<RequestDetail />);
    const emailOrPhoneCheck = wrapper.find(Form.Check);
    const mockedEvent = { target: { value: JSON.stringify(initialContact) } };
    emailOrPhoneCheck.at(0).simulate('click', mockedEvent);
    const emailOrPhoneForm = wrapper.find(Form);
    expect(emailOrPhoneForm).toBeTruthy();
  });
  it('should cell handleSelect on changing select ', () => {
    const initialContact = {
      name: 'test',
      email: 'test@test.com',
      phone: '',
    };
    const setAccountFrom = jest.fn();
    const setContacts = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [initialContact, setAccountFrom])
      .mockImplementationOnce((x) => [x, setContacts]);
    const wrapper = mount(<RequestDetail />);
    const emailOrPhoneCheck = wrapper.find(Form.Check);
    const mockedEvent = { target: { value: JSON.stringify(initialContact) } };
    emailOrPhoneCheck.at(0).simulate('click', mockedEvent);
    const emailOrPhoneForm = wrapper.find(Form);
    expect(emailOrPhoneForm).toBeTruthy();
  });
});
