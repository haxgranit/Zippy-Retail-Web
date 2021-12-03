import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import SecurityRecipientPage from './SecurityRecipientPage';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('Security Recipient Page Component', () => {
  it('Click next button on Security Recipient Page', () => {
    const showModal = jest.fn();
    const wrapper = shallow(<SecurityRecipientPage showModal={showModal} />);
    const mEvent = { preventDefault: jest.fn() };
    wrapper.find('Button[variant="danger"]').simulate('click', mEvent);
    expect(showModal).toBeCalledTimes(1);
  });
});
