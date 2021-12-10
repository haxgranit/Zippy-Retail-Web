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
    const wrapper = shallow(
      <BrowserRouter>
        <RequestReminder />
      </BrowserRouter>,
    );
    const RequestReminderComponent = wrapper.find('RequestReminder');
    expect(RequestReminderComponent).toHaveLength(1);
  });
  it('should click buttons on RequestReminder', () => {
    const wrapper = mount(
      <BrowserRouter>
        <RequestReminder />
      </BrowserRouter>,
    );

    const buttons = wrapper.childAt(0).find(Button);
    buttons.at(0).simulate('click');
    buttons.at(1).simulate('click');

    expect(mockedUsedNavigate).toBeCalledTimes(2);
  });
});
