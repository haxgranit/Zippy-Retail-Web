import { render } from '@testing-library/react';

import ViewEStatements from './ViewEStatements';

describe('ViewEStatements Component', () => {
  it('should render ViewEStatements Page', () => {
    const { container } = render(<ViewEStatements />);
    expect(container).toMatchSnapshot();
  });
});
