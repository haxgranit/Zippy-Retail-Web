import Enzyme, { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Status from './Status';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useLocation: () => ({
    tabId: 'received',
  }),
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
});
