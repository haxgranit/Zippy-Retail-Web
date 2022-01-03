import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Form, FormControl } from 'react-bootstrap';
import SendMoney from './SendMoney';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useParams: () => ({
    stepId: 'details',
  }),
  useNavigate: () => mockedUsedNavigate,
}));

const mounted = mount(
  <BrowserRouter>
    <SendMoney />
  </BrowserRouter>,
);

describe('SendMoney Component', () => {
  it('should render StepComponent inside a SendMoney', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <SendMoney />
      </BrowserRouter>,
    );
    const header = wrapper.childAt(0).dive().find('StepComponent');
    expect(header).toHaveLength(1);
  });

  it('should render DetailsPage inside a SendMoney', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <SendMoney />
      </BrowserRouter>,
    );
    const header = wrapper.childAt(0).dive().find('DetailsPage');
    expect(header).toHaveLength(1);
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
  });
});
