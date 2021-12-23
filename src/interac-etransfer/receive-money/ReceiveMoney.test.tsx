import { render, fireEvent } from '../../test-utils';
import Enzyme, { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ReceiveMoney from './ReceiveMoney';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('ReceiveMoney Component', () => {
  it('should render ReceiveMoney', () => {
    const { getByText } = render(<ReceiveMoney />);
    expect(getByText('RECEIVE MONEY')).toBeInTheDocument();
  });

  it('should navigate when click buttons', () => {
    const { container } = render(<ReceiveMoney />);
    fireEvent.click(container.querySelectorAll('button')[0]);
    fireEvent.click(container.querySelectorAll('button')[1]);
    expect(mockedUsedNavigate).toBeCalledTimes(2);
  });
});
