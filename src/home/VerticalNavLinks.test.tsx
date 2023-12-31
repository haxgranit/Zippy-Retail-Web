import '../i18n/config';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VerticalNavLinks from './VerticalNavLinks';

const ReactTestRenderer = require('react-test-renderer');

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useLocation: () => ({
    pathname: 'my-account',
  }),
}));

jest.mock('@azure/msal-react', () => ({
  useIsAuthenticated: () => true,
  useMsal: () => ({
    accounts: [null],
    instance: {
      acquireTokenSilent: jest.fn(),
    },
  }),
}));

describe('VerticalNavLinks Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <BrowserRouter>
        <VerticalNavLinks />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('click buttons on VerticalNavLinks', () => {
    const { container } = render(
      <BrowserRouter>
        <VerticalNavLinks />
      </BrowserRouter>,
    );

    const links = container.querySelectorAll('.nav-link');
    expect(links).toHaveLength(7);
    fireEvent.click(links[0]);
    fireEvent.click(links[1]);
    fireEvent.click(links[2]);
    fireEvent.click(links[3]);
    expect(container.querySelectorAll('#my-account-link')[0]).toBeInTheDocument();
  });
});
