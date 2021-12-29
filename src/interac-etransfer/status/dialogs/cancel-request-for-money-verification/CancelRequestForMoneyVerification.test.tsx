import { render, fireEvent, screen } from '../../../../test-utils';
import CancelRequestForMoneyVerification from './CancelRequestForMoneyVerification';

describe('ٌRequest Sent Component', () => {
  it('should render CancelRequestForMoneyVerification', () => {
    const show = true;
    const handleCancelRequest = jest.fn();
    const handleBack = jest.fn();
    render(
      <CancelRequestForMoneyVerification
        show={show}
        handleCancelRequest={handleCancelRequest}
        handleBack={handleBack}
      />,
    );
    expect(screen.getByText('Cancel Request For Money - VERIFICATION')).toBeInTheDocument();
  });
  it('should click Back button on CancelRequestForMoneyVerification', () => {
    const show = true;
    const handleCancelRequest = jest.fn();
    const handleBack = jest.fn();
    render(
      <CancelRequestForMoneyVerification
        show={show}
        handleCancelRequest={handleCancelRequest}
        handleBack={handleBack}
      />,
    );

    fireEvent.click(screen.getByText('Back'));
    expect(handleBack).toBeCalled();
  });
  it('should click CancelRequest button on CancelRequestForMoneyVerification', () => {
    const show = true;
    const handleCancelRequest = jest.fn();
    const handleBack = jest.fn();
    render(
      <CancelRequestForMoneyVerification
        show={show}
        handleCancelRequest={handleCancelRequest}
        handleBack={handleBack}
      />,
    );

    fireEvent.click(screen.getByText('Cancel Request'));
    expect(handleCancelRequest).toBeCalled();
  });
});
