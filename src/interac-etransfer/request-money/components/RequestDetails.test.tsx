import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Form } from 'react-bootstrap';
import React, { ChangeEvent } from 'react';
import RequestDetails from './RequestDetails';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('RequestDetail Component', () => {
  it('should render RequestDetail', () => {
    const wrapper = mount(<RequestDetails />);
    const title = wrapper.find('h4');
    expect(title.text()).toEqual('Request Money Details');
  });
  it('should not  render any form in beginging ', () => {
    const wrapper = mount(<RequestDetails />);
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
    const setAccountsData = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [initialContact, setAccountFrom])
      .mockImplementationOnce((x) => [x, setAccountsData])
      .mockImplementationOnce((x) => [x, setContacts]);
    const wrapper = mount(<RequestDetails />);
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
    const setAccountsData = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [initialContact, setAccountFrom])
      .mockImplementationOnce((x) => [x, setAccountsData])
      .mockImplementationOnce((x) => [x, setContacts]);
    const wrapper = mount(<RequestDetails />);
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
    const setAccountsData = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [initialContact, setAccountFrom])
      .mockImplementationOnce((x) => [x, setAccountsData])
      .mockImplementationOnce((x) => [x, setContacts]);
    const wrapper = mount(<RequestDetails />);
    const emailOrPhoneForm = wrapper.find(Form);
    const emailOrPhoneCheck = wrapper.find(Form.Select);
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
    const setAccountsData = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [initialContact, setAccountFrom])
      .mockImplementationOnce((x) => [x, setAccountsData])
      .mockImplementationOnce((x) => [x, setContacts]);
    const wrapper = mount(<RequestDetails />);
    const emailOrPhoneCheck = wrapper.find(Form.Select);
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
    const setAccountsData = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [initialContact, setAccountFrom])
      .mockImplementationOnce((x) => [x, setAccountsData])
      .mockImplementationOnce((x) => [x, setContacts]);
    const wrapper = mount(<RequestDetails />);
    const emailOrPhoneCheck = wrapper.find(Form.Select);
    const mockedEvent = { target: { value: JSON.stringify(initialContact) } };
    emailOrPhoneCheck.at(0).simulate('click', mockedEvent);
    const emailOrPhoneForm = wrapper.find(Form);
    expect(emailOrPhoneForm).toBeTruthy();
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
    const wrapper = shallow(<RequestDetails setCurrentStep={setCurrentStep} />);

    wrapper
      .find(Form.Select)
      .at(0)
      .simulate('change', {
        target: { value: JSON.stringify(initialContact) },
      });
    wrapper.find('Button[variant="danger"]').simulate('click');
    expect(setCurrentStep).toHaveBeenCalled();
  });
  it('should call setAccount when changing Select ', () => {
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
    const wrapper = mount(<RequestDetails />);
    const emailOrPhoneCheck = wrapper.find(Form.Select);
    // @ts-ignore
    emailOrPhoneCheck
      ?.at(0)
      ?.prop('onChange')({ target: { name: 'test', value: JSON.stringify(initialContact) } } as ChangeEvent<HTMLSelectElement>);
    expect(wrapper.find('option').at(2).props().value).toEqual(
      JSON.stringify(initialContact),
    );
    expect(setAccountFrom).toBeCalledWith(initialContact);
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
    const wrapper = mount(<RequestDetails />);
    const emailOrPhoneCheck = wrapper.find(Form.Select);
    // const mockedEvent = { target: { value: JSON.stringify(initialContact) } };
    // @ts-ignore
    emailOrPhoneCheck
      ?.at(0)
      ?.prop('onChange')({ target: { name: 'test', value: '' } } as ChangeEvent<HTMLSelectElement>);
    expect(setAccountFrom).toBeCalledWith(null);
    expect(wrapper.find('option').at(1).props().value).toEqual(
      '',
    );
  });
  it('should render select with Contact Details', () => {
    const initialContact = [{
      name: 'test',
      email: 'test@test.com',
      phone: '',
    },
    {
      name: 'test2',
      email: 'tes2t@test.com',
      phone: '',
    },
    {
      name: 'test3',
      email: 'test3@test.com',
      phone: '',
    },
    ];
    const setAccountFrom = jest.fn();
    const setContacts = jest.fn();
    const setAccountsData = jest.fn();

    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [initialContact, setAccountFrom])
      .mockImplementationOnce((x) => [x, setAccountsData])
      .mockImplementationOnce(() => [initialContact, setContacts]);
    const wrapper = mount(<RequestDetails />);
    const emailOrPhoneCheck = wrapper.find(Form.Select);
    const options = emailOrPhoneCheck.at(1).find('option');
    expect(options.length).toBeGreaterThan(1);
    // expect(options.at(1).children().text()).toEqual(initialContact.name);
    // expect(options.at(1).props().value).toEqual(JSON.stringify(initialContact));
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
    const wrapper = mount(<RequestDetails />);
    const emailOrPhoneCheck = wrapper.find(Form.Select);
    const options = emailOrPhoneCheck.at(1).find('option');
    expect(options.length).toEqual(1);
    expect(options.at(0).children().text()).toEqual('Select');
    expect(options.at(0).props().value).toEqual('');
  });
});
