import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import ManageMyAlerts from './ManageMyAlerts';
import EditBusinessPhone from './edit-business-phone/EditBusinessPhone';
import EditHomePhone from './edit-home-phone/EditHomePhone';
import EditMobilePhone from './edit-home-phone/EditHomePhone';
import EditEmailAccount from './edit-home-phone/EditHomePhone';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('Manage Alert Component', () => {
  it('first rendered must show property in Modals to false ', () => {
    const initialStateForshowEditHomeModal = false;
    const initialStateForshowEditBusinessPhone = false;
    const initialStateForShowEditMobilePhone = false;
    const initialStateForShowEditEmailAccount = false;
    React.useState = jest.fn()
      .mockReturnValueOnce([initialStateForshowEditHomeModal, {}])
      .mockReturnValueOnce([initialStateForshowEditBusinessPhone, {}])
      .mockReturnValueOnce([initialStateForShowEditEmailAccount, {}])
      .mockImplementationOnce((x) => [x, initialStateForShowEditMobilePhone]);
    const wrapper = shallow(<ManageMyAlerts />);
    expect(wrapper.find(EditHomePhone).prop('show')).toBe(false);
    expect(wrapper.find(EditBusinessPhone).prop('show')).toBe(false);
    expect(wrapper.find(EditMobilePhone).prop('show')).toBe(false);
    expect(wrapper.find(EditEmailAccount).prop('show')).toBe(false);
  });
  it('Click Edit Home Phone button  ', () => {
    const setShowEditHomeModal = jest.fn();
    const setShowEditBusinessPhone = jest.fn();
    const setShowEditMobilePhone = jest.fn();
    const setShowEditEmailAccount = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setShowEditHomeModal])
      .mockImplementationOnce((x) => [x, setShowEditBusinessPhone])
      .mockImplementationOnce((x) => [x, setShowEditEmailAccount])
      .mockImplementationOnce((x) => [x, setShowEditMobilePhone]);
    const wrapper = shallow(<ManageMyAlerts />);
    wrapper.find('Button[variant="link"]').at(2).simulate('click');
    expect(setShowEditHomeModal).toHaveBeenCalled();
  });
  it('Click Edit Mobile Phone button', () => {
    const setShowEditHomeModal = jest.fn();
    const setShowEditBusinessPhone = jest.fn();
    const setShowEditMobilePhone = jest.fn();
    const setShowEditEmailAccount = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setShowEditHomeModal])
      .mockImplementationOnce((x) => [x, setShowEditBusinessPhone])
      .mockImplementationOnce((x) => [x, setShowEditEmailAccount])
      .mockImplementationOnce((x) => [x, setShowEditMobilePhone]);
    const wrapper = shallow(<ManageMyAlerts />);
    wrapper.find('Button[variant="link"]').at(0).simulate('click');
    expect(setShowEditMobilePhone).toHaveBeenCalled();
  });
  it('Click Edit Business Phone  button ', () => {
    const setShowEditHomeModal = jest.fn();
    const setShowEditBusinessPhone = jest.fn();
    const setShowEditMobilePhone = jest.fn();
    const setShowEditEmailAccount = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setShowEditHomeModal])
      .mockImplementationOnce((x) => [x, setShowEditBusinessPhone])
      .mockImplementationOnce((x) => [x, setShowEditEmailAccount])
      .mockImplementationOnce((x) => [x, setShowEditMobilePhone]);
    const wrapper = shallow(<ManageMyAlerts />);
    wrapper.find('Button[variant="link"]').at(3).simulate('click');
    expect(setShowEditBusinessPhone).toHaveBeenCalled();
  });
  it('Click Edit Email Account button ', () => {
    const setShowEditHomeModal = jest.fn();
    const setShowEditBusinessPhone = jest.fn();
    const setShowEditMobilePhone = jest.fn();
    const setShowEditEmailAccount = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setShowEditHomeModal])
      .mockImplementationOnce((x) => [x, setShowEditBusinessPhone])
      .mockImplementationOnce((x) => [x, setShowEditEmailAccount])
      .mockImplementationOnce((x) => [x, setShowEditMobilePhone]);
    const wrapper = shallow(<ManageMyAlerts />);
    wrapper.find('Button[variant="link"]').at(1).simulate('click');
    expect(setShowEditEmailAccount).toHaveBeenCalled();
  });

  it('Click OK&Cancel buttons on EditHomePhone', () => {
    const setShowEditHomeModal = jest.fn();
    const setShowEditBusinessPhone = jest.fn();
    const setShowEditMobilePhone = jest.fn();
    const setShowEditEmailAccount = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setShowEditHomeModal])
      .mockImplementationOnce((x) => [x, setShowEditBusinessPhone])
      .mockImplementationOnce((x) => [x, setShowEditEmailAccount])
      .mockImplementationOnce((x) => [x, setShowEditMobilePhone]);
    const wrapper = shallow(<ManageMyAlerts />);
    const editHomePhoneModal = wrapper.find('EditHomePhone');
    const editHomePhoneWrapper = editHomePhoneModal.dive();
    const buttons = editHomePhoneWrapper.find('button');
    buttons.at(0).simulate('click');
    buttons.at(1).simulate('click');
  });

  it('Click OK&Cancel buttons on EditBusinessPhone', () => {
    const setShowEditHomeModal = jest.fn();
    const setShowEditBusinessPhone = jest.fn();
    const setShowEditMobilePhone = jest.fn();
    const setShowEditEmailAccount = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setShowEditHomeModal])
      .mockImplementationOnce((x) => [x, setShowEditBusinessPhone])
      .mockImplementationOnce((x) => [x, setShowEditEmailAccount])
      .mockImplementationOnce((x) => [x, setShowEditMobilePhone]);
    const wrapper = shallow(<ManageMyAlerts />);
    const editBusinessPhoneModal = wrapper.find('EditBusinessPhone');
    const editBusinessPhoneWrapper = editBusinessPhoneModal.dive();
    const buttons = editBusinessPhoneWrapper.find('button');
    buttons.at(0).simulate('click');
    buttons.at(1).simulate('click');
  });

  it('Click OK&Cancel buttons on EditMobilePhone', () => {
    const setShowEditHomeModal = jest.fn();
    const setShowEditBusinessPhone = jest.fn();
    const setShowEditMobilePhone = jest.fn();
    const setShowEditEmailAccount = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setShowEditHomeModal])
      .mockImplementationOnce((x) => [x, setShowEditBusinessPhone])
      .mockImplementationOnce((x) => [x, setShowEditEmailAccount])
      .mockImplementationOnce((x) => [x, setShowEditMobilePhone]);
    const wrapper = shallow(<ManageMyAlerts />);
    const editMobilePhoneModal = wrapper.find('EditMobilePhone');
    const editMobilePhoneWrapper = editMobilePhoneModal.dive();
    const buttons = editMobilePhoneWrapper.find('button');
    buttons.at(0).simulate('click');
    buttons.at(1).simulate('click');
  });

  it('Click OK&Cancel buttons on EditEmailAccount', () => {
    const setShowEditHomeModal = jest.fn();
    const setShowEditBusinessPhone = jest.fn();
    const setShowEditMobilePhone = jest.fn();
    const setShowEditEmailAccount = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setShowEditHomeModal])
      .mockImplementationOnce((x) => [x, setShowEditBusinessPhone])
      .mockImplementationOnce((x) => [x, setShowEditEmailAccount])
      .mockImplementationOnce((x) => [x, setShowEditMobilePhone]);
    const wrapper = shallow(<ManageMyAlerts />);
    const editEmailAccountModal = wrapper.find('EditEmailAccount');
    const editEmailAccountWrapper = editEmailAccountModal.dive();
    const buttons = editEmailAccountWrapper.find('button');
    buttons.at(0).simulate('click');
    buttons.at(1).simulate('click');
  });
});
