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
    const btnElements = container.querySelectorAll('div[role="button"]');
    expect(btnElements).toHaveLength(steps);
    fireEvent.click(btnElements[0], mEvent);
    fireEvent.click(btnElements[1], mEvent);
    fireEvent.click(btnElements[2], mEvent);
    expect(setCurrentStep).toBeCalledTimes(steps);
  });
});
