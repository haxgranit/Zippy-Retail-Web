import Enzyme, { mount } from 'enzyme';
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
const wrapper = mount(
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

    const Buttons = wrapper.childAt(0).find(Button);
    Buttons.at(0).simulate('click');
    Buttons.at(1).simulate('click');
    expect(mockedUsedNavigate).toBeCalledTimes(2);
  });
});
