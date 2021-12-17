import Enzyme, { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import TransferSentPage from './TransferSentPage';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Transfer Sent Page Component', () => {
  it('Click Send another transfer button on Transfer Sent Page', () => {
    const setCurrentStep = jest.fn();
    const setRealStep = jest.fn();
    const wrapper = shallow(
      <BrowserRouter>
        <TransferSentPage
          setCurrentStep={setCurrentStep}
          setRealStep={setRealStep}
        />
      </BrowserRouter>,
    );
    const mEvent = { preventDefault: jest.fn() };
    wrapper.childAt(0).dive().find('Button[variant="danger"]').simulate('click', mEvent);
    expect(setRealStep).toBeCalledTimes(1);
  });
});
