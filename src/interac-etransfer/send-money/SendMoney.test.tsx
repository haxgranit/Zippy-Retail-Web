import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import SendMoney from './SendMoney';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

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
});
