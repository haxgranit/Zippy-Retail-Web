import { render, fireEvent } from '../../test-utils';

import RequestMoney from './RequestMoney';

describe('Request Money Component', () => {
  it('should click next step button', () => {
    const { container } = render(<RequestMoney />);
    fireEvent.click(container.querySelectorAll('div[role="button"]')[0]);
  });
});
