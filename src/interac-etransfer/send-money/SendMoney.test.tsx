import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Form, FormControl } from 'react-bootstrap';
import SendMoney from './SendMoney';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });
const mounted = mount(<SendMoney />);
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useLocation: () => ({
    step: 1,
  }),
}));

describe('SendMoney Component', () => {
  it('should render StepComponent inside a SendMoney', () => {
    const wrapper = shallow(<SendMoney />);
    const header = wrapper.find('StepComponent');
    expect(header).toHaveLength(1);
  });

  it('should render DetailsPage inside a SendMoney', () => {
    const wrapper = shallow(<SendMoney />);
    const header = wrapper.find('DetailsPage');
    expect(header).toHaveLength(1);
  });

  it('click buttons on SendMoneyVerificationModal', () => {
    const wrapper = shallow(<SendMoney />);
    const modal = wrapper.find('SendMoneyVerificationModal');
    const modalWrapper = modal.dive().childAt(0);
    const buttons = modalWrapper.find('button');
    buttons.at(0).simulate('click');
    buttons.at(1).simulate('click');
    modalWrapper.find('Button[variant="link"]').simulate('click');
  });

  it('change user account and click buttons', () => {
    const wrapper = shallow(<SendMoney />);
    const detailsPage = wrapper.find('DetailsPage');
    const detailsWrapper = detailsPage.dive();
    const accountSelect = detailsWrapper.find('.send-account-select');
    accountSelect.simulate('change', { target: { value: 2 } });
    const modal = wrapper.find('SendMoneyVerificationModal');
    const modalWrapper = modal.dive().childAt(0);
    const buttons = modalWrapper.find('button');
    buttons.at(0).simulate('click');
    buttons.at(1).simulate('click');
    modalWrapper.find('Button[variant="link"]').simulate('click');
  });
  it('should render SendMoney with transferDetails initial values', () => {
    const setCurrentStep = jest.fn();
    const setRealStep = jest.fn();
    const setShowVerifyModal = jest.fn();
    const setIsSendingMoney = jest.fn();
    const setErrorMessage = jest.fn();
    const setSelectedContact = jest.fn();
    const setMainInfo = jest.fn();
    const setAccountsList = jest.fn();
    const setContactList = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [[], setAccountsList])
      .mockImplementationOnce(() => [[], setContactList])
      .mockImplementationOnce(() => [1, setCurrentStep])
      .mockImplementationOnce(() => [1, setRealStep])
      .mockImplementationOnce(() => [false, setShowVerifyModal])
      .mockImplementationOnce(() => [false, setIsSendingMoney])
      .mockImplementationOnce(() => [null, setErrorMessage])
      .mockImplementationOnce(() => [0, setSelectedContact])
      .mockImplementationOnce((x) => [x, setMainInfo]);
    const ammount = mounted.find(FormControl);
    const selects = mounted.find(Form.Select);
    expect(ammount.at(0).prop('value')).toEqual(0);
    expect(selects.at(0).text()).toEqual('Select');
    expect(selects.at(1).text()).toEqual('Select');
  });
});
