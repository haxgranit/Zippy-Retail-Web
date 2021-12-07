import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import ManageMyAlerts from './ManageMyAlerts';
import EditBusinessPhone from './edit-business-phone/EditBusinessPhone';
import EditHomePhone from './edit-home-phone/EditHomePhone';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('Manage Alert Component', () => {
  it('first rendered must show property in Modals to false ', () => {
    const initialStateForshowEditHomeModal = false;
    const initialStateForshowEditBusinessPhone = false;
    React.useState = jest.fn()
      .mockReturnValueOnce([initialStateForshowEditHomeModal, {}])
      .mockReturnValueOnce([initialStateForshowEditBusinessPhone, {}]);
    const wrapper = shallow(<ManageMyAlerts />);
    expect(wrapper.find(EditHomePhone).prop('show')).toBe(false);
    expect(wrapper.find(EditBusinessPhone).prop('show')).toBe(false);
  });
  it('Click Edit Home Phone button  ', () => {
    const setShowEditHomeModal = jest.fn();
    const setShowEditBusinessPhone = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setShowEditHomeModal])
      .mockImplementationOnce((x) => [x, setShowEditBusinessPhone]);
    const wrapper = shallow(<ManageMyAlerts />);
    wrapper.find('Button[variant="link"]').at(2).simulate('click');
    expect(setShowEditHomeModal).toHaveBeenCalled();
  });
  it('Click Edit Business Phone  button ', () => {
    const setShowEditHomeModal = jest.fn();
    const setShowEditBusinessPhone = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setShowEditHomeModal])
      .mockImplementationOnce((x) => [x, setShowEditBusinessPhone]);
    const wrapper = shallow(<ManageMyAlerts />);
    wrapper.find('Button[variant="link"]').at(3).simulate('click');
    expect(setShowEditBusinessPhone).toHaveBeenCalled();
  });
});
