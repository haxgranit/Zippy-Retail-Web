import { render, fireEvent } from '../../../test-utils';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { BrowserRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import RequestReminder from './RequestReminder';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('ٌRequest Reminder Component', () => {
  it('should render RequestReminder', () => {
    const { getByText } = render(<RequestReminder />);
    expect(getByText('A reminder has been sent')).toBeInTheDocument();
  });
  it('should click buttons on RequestReminder', () => {
    const { container } = render(<RequestReminder />);

    fireEvent.click(container.querySelectorAll('button')[0]);
    fireEvent.click(container.querySelectorAll('button')[1]);

    expect(mockedUsedNavigate).toBeCalledTimes(2);
  });
});
