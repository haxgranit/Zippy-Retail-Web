import { render, fireEvent } from '../../../test-utils';
import RequestCanceled from './RequestCanceled';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('ٌRequest Canceled Component', () => {
  it('should render RequestCanceled', () => {
    const { getByText } = render(<RequestCanceled />);
    expect(getByText('Request Canceled')).toBeInTheDocument();
  });
  it('should click buttons on RequestCanceled', () => {
    const { container } = render(<RequestCanceled />);

    fireEvent.click(container.querySelectorAll('button')[0]);
    fireEvent.click(container.querySelectorAll('button')[1]);

    expect(mockedUsedNavigate).toBeCalledTimes(2);
  });
});
