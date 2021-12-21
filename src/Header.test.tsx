import { render, fireEvent, screen } from './test-utils';
import { waitFor } from '@testing-library/react';
import Header from './Header';
import { act } from 'react-dom/test-utils';

const mockLoginRedirect = jest.fn();
const mockLogoutRedirect = jest.fn();
const mockChangeLanguage = jest.fn();
const mockI18nTranslate = 'Test String';

jest.mock("react-i18next", () => ({
  initReactI18next: { type: "3rdParty", init: jest.fn() },
  useTranslation: () => ({
    i18n: {
      changeLanguage: () => mockChangeLanguage,
    },
    t: () => mockI18nTranslate,
  }),
  Trans: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock('@azure/msal-react', () => ({
  useIsAuthenticated: () => true,
  useMsal: () => ({
    instance: {
      loginRedirect: () => mockLoginRedirect,
      logoutRedirect: () => mockLogoutRedirect,
    },
    inProgress: 'none',
  }),
}));

describe('Header', () => {
  test('change language on header ', async () => {
    const { container } = render(<Header />);
    fireEvent.click(container.querySelectorAll('button')[1]);
    fireEvent.click(container.querySelectorAll('.i18n-dropdown-title')[0]);

    await waitFor(() => screen.getByText('English (Canada)'));

    fireEvent.click(container.querySelectorAll('.nav-dropdown-item')[0]);
    fireEvent.click(container.querySelectorAll('.nav-dropdown-item')[1]);
    fireEvent.click(container.querySelectorAll('.nav-dropdown-item')[2]);
    fireEvent.click(container.querySelectorAll('.nav-dropdown-item')[3]);
  });

  test('click login button on header', () => {
    jest.mock('@azure/msal-react', () => ({
      useIsAuthenticated: () => false,
      useMsal: () => ({
        instance: {
          loginRedirect: () => mockLoginRedirect,
          logoutRedirect: () => mockLogoutRedirect,
        },
        inProgress: 'none',
      }),
    }));
    const { container } = render(<Header />);
    fireEvent.click(container.querySelectorAll('button')[1]);
  });
});
