import { render } from '@testing-library/react';

import ViewEStatements from './ViewEStatements';

describe('ViewEStatements Component', () => {
  it('should render ViewEStatements Page', () => {
    const { getByText } = render(<ViewEStatements />);
    expect(getByText('View Account Details')).toBeInTheDocument();
  });
});
