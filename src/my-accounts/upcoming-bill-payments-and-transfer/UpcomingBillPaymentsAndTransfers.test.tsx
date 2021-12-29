import { render } from '@testing-library/react';

import UpcomingBillPaymentsAndTransfers from './UpcomingBillPaymentsAndTransfers';

describe('UpcomingBillPaymentsAndTransfers Component', () => {
  it('should render UpcomingBillPaymentsAndTransfers Page', () => {
    const { getByText } = render(<UpcomingBillPaymentsAndTransfers />);
    expect(
      getByText('UPCOMING BILL PAYMENTS AND TRANSFER'),
    ).toBeInTheDocument();
  });
});
