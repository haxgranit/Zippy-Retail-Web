import { render } from '@testing-library/react';

import MyAccounts from './MyAccounts';

describe('MyAccounts Component', () => {
  it('should render MyAccounts Page', () => {
    const { container } = render(<MyAccounts />);
    expect(container).toMatchSnapshot();
  });
});
