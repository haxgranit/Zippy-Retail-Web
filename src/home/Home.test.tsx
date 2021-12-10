import Enzyme, { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Home from './Home';
import '../i18n/config';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

const mockUseAuthenticated = jest.fn();
jest.mock('@azure/msal-react', () => ({
  useIsAuthenticated: () => mockUseAuthenticated
}));

describe('Home Component', () => {
  it('should render home component', () => {
    shallow(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(mockUseAuthenticated).toHaveBeenCalled();
  });
});
