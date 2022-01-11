import { render } from '@testing-library/react';

import StatementPreferences from './StatementPreferences';

describe('StatementPreferences Component', () => {
  it('should render StatementPreferences Page', () => {
    const { container } = render(<StatementPreferences />);
    expect(container).toMatchSnapshot();
  });
});