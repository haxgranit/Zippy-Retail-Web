import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import SendMoneyVerificationModal from './SendMoneyVerificationModal';
import { isValidEmail } from '../helpers/Validators';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('SendMoneyVerificationModal Component', () => {
  it('should have valid informations', () => {
    const wrapper = shallow(
      <SendMoneyVerificationModal
        transferDetails={{
          source: { name: 'source', email: 'source@zippy.cash' },
          destination: { name: 'destination', email: 'destination@zippy.cash' },
          fromAccount: 'Personal (8000 001 000000000) $1,747.46',
          amount: 10000,
        }}
        isSendingMoney={false}
        handleBack={jest.fn()}
        handleClose={jest.fn()}
        handleNext={jest.fn()}
        show
      />,
    );
    const labels = wrapper.find('p');
    expect(labels.at(3).text()).toEqual('source');
    expect(labels.at(4).text()).toEqual('source@zippy.cash');
    expect(labels.at(6).text()).toEqual('destination');
    expect(labels.at(7).text()).toEqual('destination@zippy.cash');
    expect(labels.at(9).text()).toEqual('$10,000.00');
    expect(labels.at(11).text()).toEqual('Personal (8000 001 000000000) $1,747.46');
    expect(isValidEmail(labels.at(4).text())).toBeTruthy();
    expect(isValidEmail(labels.at(7).text())).toBeTruthy();
  });
});
