import
{
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import SecurityQuestionPage from './SecurityQuestionPage';
import MAIN_INFO from '../../../stories/MainInfo';

const mockShowModal = jest.fn();
const mockNavigateSteps = jest.fn();
const mockSetMainInfo = jest.fn();
const mockSetErrorMessage = jest.fn();
const mockSetCurrentStep = jest.fn();

const component = (
  <SecurityQuestionPage
    showModal={mockShowModal}
    navigateSteps={mockNavigateSteps}
    setMainInfo={mockSetMainInfo}
    setErrorMessage={mockSetErrorMessage}
    setCurrentStep={mockSetCurrentStep}
    mainInfo={MAIN_INFO}
  />
);

beforeEach(cleanup);

describe('Security Question Page Component', () => {
  it('should render SecurityQuestionPage', () => {
    render(component);
    expect(component).toMatchSnapshot();
  });

  it('Click next button on Security Question Page', () => {
    render(component);
    screen.getAllByRole('button')[2].click();
    expect(mockShowModal).toBeCalledTimes(1);
  });

  it('Click back button on Security Question Page', () => {
    render(component);
    screen.getAllByRole('button')[1].click();
    expect(mockNavigateSteps).toBeCalledTimes(1);
  });

  it('change FormControl text values', () => {
    render(component);
    const textboxes = screen.getAllByRole('textbox');

    fireEvent.change(textboxes[0], {
      target: { value: 'new value' },
    });
    fireEvent.change(textboxes[1], {
      target: { value: 'new value' },
    });
    fireEvent.change(textboxes[2], {
      target: { value: 'new value' },
    });
    screen.getByRole('checkbox').click();
    expect(mockSetMainInfo).toBeCalledTimes(4);

    screen.getAllByRole('button')[1].click();
    expect(mockNavigateSteps).toBeCalledTimes(1);
  });

  it('should not show modal when securityQuestion not valid', () => {
    const wrapper = (
      <SecurityQuestionPage
        showModal={mockShowModal}
        navigateSteps={mockNavigateSteps}
        setMainInfo={mockSetMainInfo}
        setErrorMessage={mockSetErrorMessage}
        setCurrentStep={mockSetCurrentStep}
        mainInfo={{ ...MAIN_INFO, securityQuestion: undefined }}
      />
    );
    render(wrapper);
    screen.getAllByRole('button')[2].click();
    expect(mockShowModal).toBeCalledTimes(0);
  });

  it('should not show modal when securityAnswer not valid', () => {
    const wrapper = (
      <SecurityQuestionPage
        showModal={mockShowModal}
        navigateSteps={mockNavigateSteps}
        setMainInfo={mockSetMainInfo}
        setErrorMessage={mockSetErrorMessage}
        setCurrentStep={mockSetCurrentStep}
        mainInfo={{ ...MAIN_INFO, securityAnswer: undefined }}
      />
    );
    render(wrapper);
    screen.getAllByRole('button')[2].click();
    expect(mockShowModal).toBeCalledTimes(0);
  });

  it('should not show modal when confirmSecurityAnswer not valid', () => {
    const wrapper = (
      <SecurityQuestionPage
        showModal={mockShowModal}
        navigateSteps={mockNavigateSteps}
        setMainInfo={mockSetMainInfo}
        setErrorMessage={mockSetErrorMessage}
        setCurrentStep={mockSetCurrentStep}
        mainInfo={{ ...MAIN_INFO, confirmSecurityAnswer: undefined }}
      />
    );
    render(wrapper);
    screen.getAllByRole('button')[2].click();
    expect(mockShowModal).toBeCalledTimes(0);
  });

  it('should not show modal when confirmSecurityAnswer and securityAnswer are not matching', () => {
    const wrapper = (
      <SecurityQuestionPage
        showModal={mockShowModal}
        navigateSteps={mockNavigateSteps}
        setMainInfo={mockSetMainInfo}
        setErrorMessage={mockSetErrorMessage}
        setCurrentStep={mockSetCurrentStep}
        mainInfo={{
          ...MAIN_INFO,
          confirmSecurityAnswer: 'value 1',
          securityAnswer: 'value 2',
        }}
      />
    );
    render(wrapper);

    screen.getAllByRole('button')[2].click();
    expect(mockShowModal).toBeCalledTimes(0);
  });
});
