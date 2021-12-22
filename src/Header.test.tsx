import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HeaderPure } from './Header';

const mockChangeLanguage = jest.fn();

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      changeLanguage: mockChangeLanguage,
    },
    t: (key: string) => key,
  }),
}));

const component = (
  <BrowserRouter>
    <HeaderPure
      isAuthenticated
      isInProgress={false}
      handleLogin={() => {}}
      handleLogout={() => {}}
    />
  </BrowserRouter>
);

test('can change language to English (Canada)', async () => {
  render(component);
  (await screen.findByText('header.language')).click();
  (await screen.findByText('English (Canada)')).click();
  expect(mockChangeLanguage).toBeCalledTimes(1);
  expect(mockChangeLanguage.mock.calls[0][0]).toBe('en-CA');
});

test('can change language to French (Canada)', async () => {
  render(component);
  (await screen.findByText('header.language')).click();
  (await screen.findByText('French (Canada)')).click();
  expect(mockChangeLanguage).toBeCalledTimes(1);
  expect(mockChangeLanguage.mock.calls[0][0]).toBe('fr-CA');
});
