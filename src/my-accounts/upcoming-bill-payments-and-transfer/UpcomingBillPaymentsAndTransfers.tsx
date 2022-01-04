import { Button } from 'react-bootstrap';
import CommonHeader from '../../common/CommonHeader';

export default function UpcomingBillPaymentsAndTransfers() {
  return (
    <div>
      <CommonHeader title="Upcoming Bill Payments & Transfer" />
      <div className="content-wrapper">
        <p>
          You have no bill payments or transfers scheduled.
          <Button variant="link" className="text-black">Set up a future bill payment</Button>
          <span>or</span>
          <Button variant="link" className="text-black">transfer</Button>
        </p>
      </div>
    </div>
  );
}
