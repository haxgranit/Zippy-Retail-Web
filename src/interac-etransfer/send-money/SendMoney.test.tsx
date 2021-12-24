
import React from 'react';
import { render, fireEvent, screen, waitFor } from '../../test-utils';
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
    render(<SendMoney />);
    expect(screen.getByText('Steps:')).toBeInTheDocument();
  });

  it('should render DetailsPage inside a SendMoney', () => {
    render(<SendMoney />);
    expect(screen.getByText('Your Interac e-Transfer Details')).toBeInTheDocument();
  });

  it('click buttons on SendMoneyVerificationModal', async () => {
    const { container } = render(<SendMoney />);
    fireEvent.click(container.querySelectorAll('div[role="button"]')[1]);
    await waitFor(() => screen.getByText('Continue'));
  });

  it('change user account and click buttons', () => {
    const { container } = render(<SendMoney />);
    expect(screen.getByText('Your Interac e-Transfer Details')).toBeInTheDocument();
    fireEvent.change(container.querySelectorAll('.send-account-select')[0], { target: { value: 2 } });
    fireEvent.click(container.querySelectorAll('div[role="button"]')[1]);
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
