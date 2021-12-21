import { render, fireEvent } from './test-utils';
import './i18n/config';

import Personal from './Personal';

const mockLoginRedirect = jest.fn();
jest.mock('@azure/msal-react', () => ({
  ...(jest.requireActual('@azure/msal-react') as any),
  useMsal: () => ({
    instance: {
      loginRedirect: mockLoginRedirect,
    },
  }),
}));

describe('Personal Component', () => {
  it('click a button on Personal', () => {
    const { container } = render(<Personal />);

    fireEvent.click(container.querySelectorAll('button')[0]);
    expect(mockLoginRedirect).toHaveBeenCalled();
  });
});
