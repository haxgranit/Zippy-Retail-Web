import
{
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DetailsPage from './DetailsPage';
import MAIN_INFO from '../../../stories/MainInfo';

const mockSetMainInfo = jest.fn();
const mockSetErrorMessage = jest.fn();
const mockSetCurrentStep = jest.fn();
const mockSetContactToSend = jest.fn();
const mockNavigateSteps = jest.fn();

const component = (
  <DetailsPage
    setCurrentStep={mockSetCurrentStep}
    navigateSteps={mockNavigateSteps}
    setMainInfo={mockSetMainInfo}
    mainInfo={MAIN_INFO}
    setErrorMessage={mockSetErrorMessage}
    setContactToSend={mockSetContactToSend}
    setSelectedAccount={jest.fn()}
    selectedAccount={1}
    selectedContact={1}
    contacts={[
      {
        id: 1,
        firstName: 'Test',
        lastName: 'Test',
        email: 'email@zippy.cash',
        phone: 'phone',
      },
    ]}
    accounts={[
      {
        id: 0,
        name: 'test',
        email: 'email@zippy.cash',
      },
    ]}
    validateInputs={jest.fn()}
    user={undefined}
  />
);

beforeEach(cleanup);

describe('DetailsPage Component', () => {
  it('should render DetailsPage', () => {
    render(component);
    expect(
      screen.getByText('Your Interac e-Transfer Details'),
    ).toBeInTheDocument();
  });

  it('Click next button on DetailsPage', () => {
    render(component);
    screen.getAllByRole('button')[1].click();
    expect(mockNavigateSteps).toBeCalledTimes(1);
  });

  it('Click next button on DetailsPage with option changing', () => {
    render(component);
    userEvent.selectOptions(screen.getAllByRole('combobox')[0], ['1']);
    screen.getAllByRole('button')[1].click();
    expect(mockNavigateSteps).toBeCalledTimes(1);
    expect(mockSetContactToSend).toBeCalledTimes(1);
  });

  it('Click next button on DetailsPage with option 2', () => {
    render(component);
    screen.getAllByRole('button')[1].click();
    expect(mockNavigateSteps).toBeCalledTimes(1);
  });

  it('change FormControl text values', () => {
    render(component);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'new message' },
    });
    fireEvent.change(screen.getByDisplayValue('1000'), {
      target: { value: 200 },
    });

    expect(mockSetMainInfo).toBeCalledTimes(2);
  });

  it('change FormControl to call setContactToSend', () => {
    render(component);
    userEvent.selectOptions(screen.getAllByRole('combobox')[0], ['1']);
    expect(mockSetContactToSend).toBeCalledTimes(1);
  });

  it('next button click should not affect ammount', () => {
    render(component);
    expect(screen.getByDisplayValue('1000')).toBeInTheDocument();
    screen.getAllByRole('button')[1].click();
    expect(screen.getByDisplayValue('1000')).toBeInTheDocument();
  });

  it('next button click should not affect transfer method', () => {
    render(component);
    expect(screen.getAllByRole('combobox')[2].textContent).toEqual('Email');
    screen.getAllByRole('button')[1].click();
    expect(screen.getAllByRole('combobox')[2].textContent).toEqual('Email');
  });

  it('getEmail without contacts should render no email', () => {
    const wrapper = (
      <DetailsPage
        setCurrentStep={mockSetCurrentStep}
        navigateSteps={mockNavigateSteps}
        setMainInfo={mockSetMainInfo}
        mainInfo={MAIN_INFO}
        setErrorMessage={mockSetErrorMessage}
        setContactToSend={mockSetContactToSend}
        setSelectedAccount={jest.fn()}
        selectedAccount={0}
        contacts={[]}
        accounts={[
          {
            id: 0,
            name: 'test',
            email: 'email@zippy.cash',
          },
        ]}
        selectedContact={1}
        validateInputs={jest.fn()}
        user={undefined}
      />
    );

    render(wrapper);
    expect(screen.getByText('Email: No email')).toBeInTheDocument();
  });

  it('getEmail with contacts should render an email', () => {
    render(component);
    expect(screen.getByText('Email: email@zippy.cash')).toBeInTheDocument();
  });

  it('should not call setCurrentStep when no contact selected', () => {
    const wrapper = (
      <DetailsPage
        setCurrentStep={mockSetCurrentStep}
        navigateSteps={mockNavigateSteps}
        setMainInfo={mockSetMainInfo}
        mainInfo={MAIN_INFO}
        setErrorMessage={mockSetErrorMessage}
        setContactToSend={mockSetContactToSend}
        setSelectedAccount={jest.fn()}
        selectedAccount={1}
        selectedContact={0}
        contacts={[
          {
            id: 1,
            firstName: 'Test',
            lastName: 'Test',
            email: 'email@zippy.cash',
            phone: 'phone',
          },
        ]}
        accounts={[
          {
            id: 0,
            name: 'test',
            email: 'email@zippy.cash',
          },
        ]}
        validateInputs={jest.fn()}
        user={undefined}
      />
    );

    render(wrapper);
    expect(mockSetCurrentStep).toBeCalledTimes(0);
  });

  it('should not call setCurrentStep when no account selected', () => {
    const wrapper = (
      <DetailsPage
        setCurrentStep={mockSetCurrentStep}
        navigateSteps={mockNavigateSteps}
        setMainInfo={mockSetMainInfo}
        mainInfo={MAIN_INFO}
        setErrorMessage={mockSetErrorMessage}
        setContactToSend={mockSetContactToSend}
        setSelectedAccount={jest.fn()}
        selectedAccount={0}
        selectedContact={1}
        contacts={[
          {
            id: 1,
            firstName: 'Test',
            lastName: 'Test',
            email: 'email@zippy.cash',
            phone: 'phone',
          },
        ]}
        accounts={[
          {
            id: 0,
            name: 'test',
            email: 'email@zippy.cash',
          },
        ]}
        validateInputs={jest.fn()}
        user={undefined}
      />
    );

    render(wrapper);
    expect(mockSetCurrentStep).toBeCalledTimes(0);
  });

  it('should not call setCurrentStep when no transferMethod selected', () => {
    const wrapper = (
      <DetailsPage
        setCurrentStep={mockSetCurrentStep}
        navigateSteps={mockNavigateSteps}
        setMainInfo={mockSetMainInfo}
        mainInfo={{ ...MAIN_INFO, transferMethod: '' }}
        setErrorMessage={mockSetErrorMessage}
        setContactToSend={mockSetContactToSend}
        setSelectedAccount={jest.fn()}
        selectedAccount={1}
        selectedContact={1}
        contacts={[
          {
            id: 1,
            firstName: 'Test',
            lastName: 'Test',
            email: 'email@zippy.cash',
            phone: 'phone',
          },
        ]}
        accounts={[
          {
            id: 0,
            name: 'test',
            email: 'email@zippy.cash',
          },
        ]}
        validateInputs={jest.fn()}
        user={undefined}
      />
    );

    render(wrapper);
    expect(mockSetCurrentStep).toBeCalledTimes(0);
  });

  it('should not call setCurrentStep when ammount equal 0', () => {
    const wrapper = (
      <DetailsPage
        setCurrentStep={mockSetCurrentStep}
        navigateSteps={mockNavigateSteps}
        setMainInfo={mockSetMainInfo}
        mainInfo={{ ...MAIN_INFO, amount: 0 }}
        setErrorMessage={mockSetErrorMessage}
        setContactToSend={mockSetContactToSend}
        setSelectedAccount={jest.fn()}
        selectedAccount={1}
        selectedContact={1}
        contacts={[
          {
            id: 1,
            firstName: 'Test',
            lastName: 'Test',
            email: 'email@zippy.cash',
            phone: 'phone',
          },
        ]}
        accounts={[
          {
            id: 0,
            name: 'test',
            email: 'email@zippy.cash',
          },
        ]}
        validateInputs={jest.fn()}
        user={undefined}
      />
    );

    render(wrapper);
    expect(mockSetCurrentStep).toBeCalledTimes(0);
  });

  it('should not call setCurrentStep when ammount greater than 3000', () => {
    const wrapper = (
      <DetailsPage
        setCurrentStep={mockSetCurrentStep}
        navigateSteps={mockNavigateSteps}
        setMainInfo={mockSetMainInfo}
        mainInfo={{ ...MAIN_INFO, amount: 3001 }}
        setErrorMessage={mockSetErrorMessage}
        setContactToSend={mockSetContactToSend}
        setSelectedAccount={jest.fn()}
        selectedAccount={1}
        selectedContact={1}
        contacts={[
          {
            id: 1,
            firstName: 'Test',
            lastName: 'Test',
            email: 'email@zippy.cash',
            phone: 'phone',
          },
        ]}
        accounts={[
          {
            id: 0,
            name: 'test',
            email: 'email@zippy.cash',
          },
        ]}
        validateInputs={jest.fn()}
        user={undefined}
      />
    );

    render(wrapper);
    expect(mockSetCurrentStep).toBeCalledTimes(0);
  });
});
