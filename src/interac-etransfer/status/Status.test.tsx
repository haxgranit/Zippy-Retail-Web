import Enzyme, { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Status from './Status';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useLocation: () => ({
    tabId: 'received',
  }),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Status Component', () => {
  it('should render Status', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <Status />
      </BrowserRouter>,
    );
    const StatusComponent = wrapper.find('Status');
    expect(StatusComponent).toHaveLength(1);
  });

  it('should click buttons on status', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <Status />
      </BrowserRouter>,
    );
    const mEvent = { preventDefault: jest.fn() };
    const Buttons = wrapper.childAt(0).dive().find('Button');
    Buttons.at(3).simulate('click', mEvent);
    Buttons.at(4).simulate('click', mEvent);
    expect(mockedUsedNavigate).toBeCalledTimes(2);
  });
});
