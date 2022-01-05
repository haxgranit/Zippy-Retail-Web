import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Home from './Home';
import '../i18n/config';

jest.mock('@azure/msal-react', () => ({
  useIsAuthenticated: () => true,
}));

describe('Home Component', () => {
  it('should render home component', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
  });
});
