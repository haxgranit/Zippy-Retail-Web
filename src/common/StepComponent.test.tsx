import { render, fireEvent } from '@testing-library/react';
import StepComponent from './StepComponent';

describe('Step Component', () => {
  it('Click Step button on Step Component', () => {
    const setCurrentStep = jest.fn();
    const steps = 3;
    const { container } = render(
      <StepComponent
        steps={steps}
        currentStep={1}
        setCurrentStep={setCurrentStep}
        navigateSteps={jest.fn()}
      />,
    );
    const mEvent = { preventDefault: jest.fn() };
    for (let i = 0; i < steps; i += 1) {
      fireEvent.click(container.querySelectorAll('div[role="button"]')[i], mEvent);
    }
    expect(setCurrentStep).toBeCalledTimes(steps);
  });
});
