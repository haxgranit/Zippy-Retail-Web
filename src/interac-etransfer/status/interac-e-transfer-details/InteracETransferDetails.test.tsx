import Enzyme, { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
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
    const InteracETransferDetailsComponent = wrapper.find(
      'InteracETransferDetails',
    );
    expect(InteracETransferDetailsComponent).toHaveLength(1);
  });

  it('should click buttons on InteracETransferDetails', () => {
    let wrapper: any;
    act(() => {
      wrapper = shallow(
        <BrowserRouter>
          <InteracETransferDetails />
        </BrowserRouter>,
      );
    });
    const mEvent = { preventDefault: jest.fn() };
    wrapper
      .childAt(0)
      .dive()
      .find('SentTabContent')
      .dive()
      .find('Button')
      .at(0)
      .simulate('click', mEvent);

    wrapper
      .childAt(0)
      .dive()
      .find('RequestedTabContent')
      .dive()
      .find('Button')
      .at(0)
      .simulate('click', mEvent);
    expect(mockedUsedNavigate).toBeCalledTimes(2);
  });
});
