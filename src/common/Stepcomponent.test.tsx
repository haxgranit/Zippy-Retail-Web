import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import StepComponent from './StepComponent';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('Step Component', () => {
  it('Click Step button on Step Component', () => {
    const setCurrentStep = jest.fn();
    const setPageIndex = jest.fn();
    const steps = 3;
    const wrapper = shallow(
      <StepComponent
        steps={steps}
        currentStep={1}
        setCurrentStep={setCurrentStep}
        setPageIndex={setPageIndex}
      />,
    );
    const mEvent = { preventDefault: jest.fn() };
    for (let i = 0; i < steps; i += 1) {
      wrapper.find('div[role="button"]').at(i).simulate('click', mEvent);
      expect(setPageIndex).toBeCalledTimes(i + 1);
    }
  });
});
