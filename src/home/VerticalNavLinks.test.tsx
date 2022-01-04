import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import VerticalNavLinks from './VerticalNavLinks';
import '../i18n/config';

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useLocation: () => ({
    pathname: 'my-accounts',
  }),
}));

describe('VerticalNavLinks Component', () => {
  it('click buttons on VerticalNavLinks', () => {
    const { container } = render(
      <BrowserRouter>
        <VerticalNavLinks />
      </BrowserRouter>,
    );

    const links = container.querySelectorAll('.nav-link');
    expect(links).toHaveLength(8);
    fireEvent.click(links[0]);
    fireEvent.click(links[1]);
    fireEvent.click(links[2]);
    fireEvent.click(links[3]);
    expect(container.querySelectorAll('#my-account-link')[0]).toBeInTheDocument();
  });
});
