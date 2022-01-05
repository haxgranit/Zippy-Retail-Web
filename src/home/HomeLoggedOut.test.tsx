import { render, fireEvent } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import HomeLoggedOut from './HomeLoggedOut';
import '../i18n/config';

const mockUseMsal = jest.fn();
jest.mock('@azure/msal-react', () => ({
  useMsal: () => ({
    instance: {
      loginRedirect: () => mockUseMsal,
    },
  }),
}));

describe('HomeLoggedOut Component', () => {
  it('click buttons on HomeLoggedOut', () => {
    const { container } = render(
      <BrowserRouter>
        <HomeLoggedOut />
      </BrowserRouter>,
    );

    const buttons = container.querySelectorAll('button');
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[2]);
    fireEvent.click(buttons[3]);
  });
});
