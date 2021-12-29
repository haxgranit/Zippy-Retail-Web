import { render } from '@testing-library/react';

import MyAccounts from './MyAccounts';

describe('MyAccounts Component', () => {
  it('should render MyAccounts Page', () => {
    const { getByText } = render(<MyAccounts />);
    expect(getByText('Online Security Guarantee')).toBeInTheDocument();
  });
});
