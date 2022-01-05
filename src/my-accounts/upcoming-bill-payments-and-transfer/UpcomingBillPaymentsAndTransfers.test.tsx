import { render } from '@testing-library/react';

import UpcomingBillPaymentsAndTransfers from './UpcomingBillPaymentsAndTransfers';

describe('UpcomingBillPaymentsAndTransfers Component', () => {
  it('should render UpcomingBillPaymentsAndTransfers Page', () => {
    const { container } = render(<UpcomingBillPaymentsAndTransfers />);
    expect(container).toMatchSnapshot();
  });
});
