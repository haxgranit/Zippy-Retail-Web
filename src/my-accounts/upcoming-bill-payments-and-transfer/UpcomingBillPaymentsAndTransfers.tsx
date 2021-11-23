import { Button } from 'react-bootstrap';
import CommonHeader from '../my-accounts/components/CommonHeader';

export default function UpcomingBillPaymentsAndTransfers() {
  return (
    <>
      <CommonHeader title="UPCOMING BILL PAYMENTS AND TRANSFER" print />
      <div className="p-3 mt-4">
        <p>
          You have no bill payments or transfers scheduled.
          <Button variant="link" className="text-black">Set up a future bill payment</Button>
          <span>or</span>
          <Button variant="link" className="text-black">transfer</Button>
        </p>
      </div>
    </>
  );
}
