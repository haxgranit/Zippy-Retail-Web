import { render } from '@testing-library/react';

import ViewAccountDetails from './ViewAccountDetails';

describe('ViewAccountDetails Component', () => {
  it('should render ViewAccountDetails Page', () => {
    const { getByText } = render(<ViewAccountDetails />);
    expect(getByText('DEPOSIT ACCOUNT DETAILS')).toBeInTheDocument();
  });
});
