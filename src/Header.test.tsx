import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HeaderPure } from './Header';

const ReactTestRenderer = require('react-test-renderer');

const SampleData = {
  id: 12,
  name: '8000 335 000000012',
  balance: 1018.35,
};

const mockChangeLanguage = jest.fn();
jest.mock('react-i18next', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useLocation: () => ({
    pathname: 'my-account',
  }),
  useTranslation: () => ({
    i18n: {
      changeLanguage: mockChangeLanguage,
    },
    t: (key: string) => key,
  }),
  useNavigate: () => jest.fn(),
}));

const component = (
  <BrowserRouter>
    <HeaderPure
      account={SampleData}
      user={undefined}
      isAuthenticated
      isInProgress={false}
      handleLogin={() => {}}
      handleLogout={() => {}}
    />
  </BrowserRouter>
);

describe('Header Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain the balance with respect to the sample data', async () => {
    render(component);
    const balance = await screen.findByText('$1,018.35');
    expect(balance.innerHTML).toBe('$1,018.35');
  });

  it('can change language to English (Canada)', async () => {
    render(component);
    (await screen.findByText('header.language')).click();
    (await screen.findByText('English (Canada)')).click();
    expect(mockChangeLanguage).toBeCalledTimes(1);
    expect(mockChangeLanguage.mock.calls[0][0]).toBe('en-CA');
  });

  it('can change language to French (Canada)', async () => {
    render(component);
    (await screen.findByText('header.language')).click();
    (await screen.findByText('French (Canada)')).click();
    expect(mockChangeLanguage).toBeCalledTimes(1);
    expect(mockChangeLanguage.mock.calls[0][0]).toBe('fr-CA');
  });
});
