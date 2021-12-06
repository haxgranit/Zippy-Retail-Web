import { Button, Row } from 'react-bootstrap';
import AlertElement from './common/AlertElement';
import GetAlertedHeader from './common/GetAlertedHeader';
import InactiveAlertNote from './common/InactiveAlertNote';

export default function Transactions() {
  const transactionAlertes = [
    'A scheduled bill payment has failed',
    'A scheduled bill payment was successful',
    'A scheduled transfer has failed',
    'A scheduled transfer was successful',
    'An interac e-Transfer was sent',
    'A return has been made',
    'Held funds are now available',
  ];
  return (
    <>
      <GetAlertedHeader />
      {transactionAlertes.map((val) => (
        <AlertElement text={val} />
      ))}
      <Row className="d-flex justify-content-end">
        <Button
          variant="outline-danger"
          style={{ width: 'auto', marginRight: 10 }}
        >
          Reset
        </Button>
        <Button variant="danger" style={{ width: 'auto', marginRight: 10 }}>
          Save
        </Button>
      </Row>
      <InactiveAlertNote />
    </>
  );
}
