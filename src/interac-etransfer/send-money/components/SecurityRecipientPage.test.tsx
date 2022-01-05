import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import SecurityRecipientPage from './SecurityRecipientPage';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('Security Recipient Page Component', () => {
  const showModal = jest.fn();
  it('Click next button on Security Recipient Page', () => {
    const wrapper = shallow(
      <SecurityRecipientPage
        showModal={showModal}
        navigateSteps={jest.fn()}
      />,
    );
    const mEvent = { preventDefault: jest.fn() };
    wrapper.find('Button[variant="danger"]').simulate('click', mEvent);
    expect(showModal).toBeCalledTimes(1);
  });

  it('Click back button on Security Recipient Page', () => {
    const navigateSteps = jest.fn();
    const wrapper = shallow(
      <SecurityRecipientPage
        showModal={showModal}
        navigateSteps={navigateSteps}
        setCurrentStep={jest.fn()}
      />,
    );
    const mEvent = { preventDefault: jest.fn() };
    wrapper.find('Button[variant="danger"]').simulate('click', mEvent);
    expect(navigateSteps).toBeCalledTimes(1);
  });
});
