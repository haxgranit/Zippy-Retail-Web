import { render, fireEvent } from './test-utils';
import './i18n/config';

import Business from './Business';

const mockLoginRedirect = jest.fn();
jest.mock('@azure/msal-react', () => ({
  ...(jest.requireActual('@azure/msal-react') as any),
  useMsal: () => ({
    instance: {
      loginRedirect: mockLoginRedirect,
    },
  }),
}));

describe('Business Component', () => {
  it('click a button on business', () => {
    const { container } = render(<Business />);

    fireEvent.click(container.querySelectorAll('button')[0]);
    expect(mockLoginRedirect).toHaveBeenCalled();
  });
});
