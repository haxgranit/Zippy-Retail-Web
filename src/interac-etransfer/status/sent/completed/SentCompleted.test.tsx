import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SentCompleted from './SentCompleted';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));
const wrapper = shallow(
  <BrowserRouter>
    <SentCompleted />
  </BrowserRouter>,
);
describe('Request Sent Component', () => {
  it('should render SentCompleted', () => {
    const setSendReminderChecked = jest.fn();
    const setShowCancelRequestForMoney = jest.fn();

    React.useState = jest
      .fn()
      .mockImplementationOnce(() => [true, setSendReminderChecked])
      .mockImplementationOnce(() => [false, setShowCancelRequestForMoney]);
    expect(wrapper.find('SentCompleted')).toHaveLength(1);
  });
});
