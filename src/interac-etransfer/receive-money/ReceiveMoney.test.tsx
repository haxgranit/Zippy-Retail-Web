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
    const wrapper = shallow(
      <BrowserRouter>
        <ReceiveMoney />
      </BrowserRouter>,
    );
    const receiveMoneyComponent = wrapper.find('ReceiveMoney');
    expect(receiveMoneyComponent).toHaveLength(1);
  });

  it('should navigate when click buttons', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <ReceiveMoney />
      </BrowserRouter>,
    );
    const mEvent = { preventDefault: jest.fn() };
    const buttons = wrapper.childAt(0).dive().find('button');
    buttons.at(0).simulate('click', mEvent);
    buttons.at(1).simulate('click', mEvent);
    expect(mockedUsedNavigate).toBeCalledTimes(2);
  });
});
