import { render } from '@testing-library/react';

import ViewAccountDetails from './ViewAccountDetails';

describe('ViewAccountDetails Component', () => {
  it('should render ViewAccountDetails Page', () => {
    const { container } = render(<ViewAccountDetails />);
    expect(container).toMatchSnapshot();
  });
});
