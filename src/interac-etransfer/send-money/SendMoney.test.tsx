import { render, fireEvent, screen, waitFor } from '../../test-utils';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import SendMoney from './SendMoney';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useLocation: () => ({
    step: 1,
  }),
}));

describe('SendMoney Component', () => {
  it('should render StepComponent inside a SendMoney', () => {
    render(<SendMoney />);
    expect(screen.getByText('Steps:')).toBeInTheDocument();
  });

  it('should render DetailsPage inside a SendMoney', () => {
    render(<SendMoney />);
    expect(screen.getByText('Your Interac e-Transfer Details')).toBeInTheDocument();
  });

  it('click buttons on SendMoneyVerificationModal', async () => {
    const { container } = render(<SendMoney />);
    fireEvent.click(container.querySelectorAll('div[role="button"]')[1]);
    await waitFor(() => screen.getByText('Continue'));
  });

  it('change user account and click buttons', () => {
    const { container } = render(<SendMoney />);
    expect(screen.getByText('Your Interac e-Transfer Details')).toBeInTheDocument();
    fireEvent.change(container.querySelectorAll('.send-account-select')[0], { target: { value: 2 } });
    fireEvent.click(container.querySelectorAll('div[role="button"]')[1]);
  });
});
