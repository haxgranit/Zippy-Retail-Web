import { BrowserRouter } from 'react-router-dom';
import { cleanup, render, screen } from '@testing-library/react';
import TransferSentPage from './TransferSentPage';
import TRANSFER_INFORMATION from '../../../stories/TransferInformation';
import { isValidEmail } from '../../helpers/Validators';

const mockSetCurrentStep = jest.fn();
const mockSetPageIndex = jest.fn();

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

const component = (
  <BrowserRouter>
    <TransferSentPage
      setCurrentStep={mockSetCurrentStep}
      setPageIndex={mockSetPageIndex}
      isCompleted
      transferInformation={TRANSFER_INFORMATION}
    />
  </BrowserRouter>
);

beforeEach(cleanup);

describe('Transfer Sent Page Component', () => {
  it('should render TransferSentPage', () => {
    render(component);
    const title = screen.getByText('Your transfer has been sent');
    expect(title).toBeInTheDocument();
  });

  it('Click Send another transfer button on Transfer Sent Page', () => {
    render(component);
    screen.getAllByRole('button')[1].click();
    expect(mockSetCurrentStep).toBeCalledTimes(1);
    expect(mockSetPageIndex).toBeCalledTimes(1);
  });

  it('Click Check Status Button on Transfer Sent Page', () => {
    render(component);
    screen.getAllByRole('button')[0].click();
    expect(mockedUsedNavigate).toHaveBeenCalled();
  });

  it('should render with the valid values', () => {
    render(component);
    const sourceEmail = screen.getByText(TRANSFER_INFORMATION.source.email);
    const destinationEmail = screen.getByText(TRANSFER_INFORMATION.destination.email);

    expect(screen.getByText(TRANSFER_INFORMATION.source.name)).toBeInTheDocument();
    expect(screen.getByText(TRANSFER_INFORMATION.destination.name)).toBeInTheDocument();
    expect(screen.getByText(TRANSFER_INFORMATION.fromAccount)).toBeInTheDocument();
    expect(screen.getByText(TRANSFER_INFORMATION.securityQuestion)).toBeInTheDocument();
    expect(screen.getByText(TRANSFER_INFORMATION.referenceNumber.toString())).toBeInTheDocument();
    expect(screen.getByText('$1,000.00')).toBeInTheDocument();
    expect(screen.getByText('$2,000.00')).toBeInTheDocument();
    expect(screen.getByText('Aug 6, 2021')).toBeInTheDocument();
    expect(screen.getByText('Submitted: December 6, 2021, 1:07 PM EST.')).toBeInTheDocument();
    expect(isValidEmail(sourceEmail.textContent!));
    expect(isValidEmail(destinationEmail.textContent!));
  });
});
