import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import TransferSentPage from './TransferSentPage';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('Transfer Sent Page Component', () => {
  it('Click Send another transfer button on Transfer Sent Page', () => {
    const setCurrentStep = jest.fn();
    const setRealStep = jest.fn();
    const setMainInfo = jest.fn();
    const setSelectedContact = jest.fn();
    const wrapper = shallow(
      <TransferSentPage
        setCurrentStep={setCurrentStep}
        setRealStep={setRealStep}
        setMainInfo={setMainInfo}
        setSelectedContact={setSelectedContact}
      />,
    );
    const mEvent = { preventDefault: jest.fn() };
    wrapper.find('Button[variant="danger"]').simulate('click', mEvent);
    expect(setRealStep).toBeCalledTimes(1);
  });
});
