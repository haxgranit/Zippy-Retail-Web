import Enzyme, { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import InteracETransferDetails from './InteracETransferDetails';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useParams: () => ({
    tabId: 'received',
  }),
  useNavigate: () => mockedUsedNavigate,
}));

describe('InteracETransferDetails Component', () => {
  it('should render InteracETransferDetails', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <InteracETransferDetails />
      </BrowserRouter>,
    );
    const InteracETransferDetailsComponent = wrapper.find('InteracETransferDetails');
    expect(InteracETransferDetailsComponent).toHaveLength(1);
  });

  it('should click buttons on InteracETransferDetails', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <InteracETransferDetails />
      </BrowserRouter>,
    );
    const mEvent = { preventDefault: jest.fn() };
    const Buttons = wrapper.childAt(0).dive().find('Button');
    Buttons.at(0).simulate('click', mEvent);
    Buttons.at(1).simulate('click', mEvent);
    Buttons.at(2).simulate('click', mEvent);
    Buttons.at(3).simulate('click', mEvent);
    Buttons.at(4).simulate('click', mEvent);
    expect(mockedUsedNavigate).toBeCalledTimes(5);
  });
});
