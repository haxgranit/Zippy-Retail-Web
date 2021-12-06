import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import TransferSentCompletePage from './TransferSentCompletePage';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('TransferSentCompletePage Component', () => {
  it('Click next button on TransferSentCompletePage', () => {
    const setCurrentStep = jest.fn();
    const setRealStep = jest.fn();
    const wrapper = shallow(
      <TransferSentCompletePage
        setCurrentStep={setCurrentStep}
        setRealStep={setRealStep}
      />,
    );
    const mEvent = { preventDefault: jest.fn() };
    wrapper.find('Button[variant="danger"]').simulate('click', mEvent);
    expect(setRealStep).toBeCalledTimes(1);
  });
});
