import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import RequestSent from './RequestSent';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));
const wrapper = shallow(
  <BrowserRouter>
    <RequestSent />
  </BrowserRouter>,
);
describe('Request Sent Component', () => {
  it('should render RequestSent', () => {
    const setSendReminderChecked = jest.fn();
    const setShowCancelRequestForMoney = jest.fn();

    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [true, setSendReminderChecked])
      .mockImplementationOnce(() => [false, setShowCancelRequestForMoney]);
    expect(wrapper.find('RequestSent')).toHaveLength(1);
  });

  it('should click buttons', () => {
    const setSendReminderChecked = jest.fn();
    const setShowCancelRequestForMoney = jest.fn();

    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [true, setSendReminderChecked])
      .mockImplementationOnce(() => [false, setShowCancelRequestForMoney]);

    const Buttons = wrapper
      .childAt(0)
      .dive()
      .find('LeftCol')
      .dive()
      .find(Button);
    Buttons.at(0).simulate('click');
    Buttons.at(1).simulate('click');
    expect(mockedUsedNavigate).toBeCalledTimes(2);
  });

  it('change actions on home', () => {
    const setSendReminderChecked = jest.fn();
    const setShowCancelRequestForMoney = jest.fn();

    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [true, setSendReminderChecked])
      .mockImplementationOnce(() => [false, setShowCancelRequestForMoney]);

    const actions = wrapper
      .childAt(0)
      .dive()
      .find('LeftCol')
      .dive()
      .find('.actions');
    actions.at(0).simulate('change', { target: { value: 1 } });
    actions.at(1).simulate('change', { target: { value: 1 } });
  });

  it('check handleBack for Verification', () => {
    const setSendReminderChecked = jest.fn();
    const setShowCancelRequestForMoney = jest.fn();

    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [false, setSendReminderChecked])
      .mockImplementationOnce(() => [true, setShowCancelRequestForMoney]);

    const VerificationComponent = wrapper
      .childAt(0)
      .dive()
      .find('LeftCol')
      .dive()
      .find('CancelRequestForMoneyVerification')
      .dive()
      .find('Button');

    VerificationComponent.find('Button').at(0).simulate('click');
    VerificationComponent.find('Button').at(1).simulate('click');
    expect(setShowCancelRequestForMoney).toHaveBeenCalled();
  });
});
