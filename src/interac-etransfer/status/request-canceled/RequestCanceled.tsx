import
{
  Button,
  Col,
  Row,
  Stack,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Divider = () => <div className="border-top my-3" />;

const LeftCol = () => {
  const navigate = useNavigate();
  return (
    <Col xs={9}>
      <span>
        <i />
        Request Canceled
      </span>
      <Row className="align-items-center mt-4">
        <Col xs={4}>TO:</Col>
        <Col xs={6}>
          Kent Ulrich
          <br />
          kentu@shw.ca
        </Col>
      </Row>
      <Divider />
      <Row className="align-items-center">
        <Col xs={4}>Amount:</Col>
        <Col xs={6}>$10.00</Col>
      </Row>
      <Divider />
      <Stack gap={3} direction="horizontal">
        <Button
          variant="outline-danger ms-auto"
          onClick={() => navigate('/interac-etransfer/status')}
        >
          Return to Status
        </Button>
        <Button variant="danger" onClick={() => navigate('/interac-etransfer/request-money')}>
          Send Another Request
        </Button>
      </Stack>
      <Divider />
      <Row>
        <Col>
          <b>Note:</b>
          <br />
          Your use of
          <i> Interac</i>
          e-Transfer is subject to the
          <i> Interac</i>
          e-Transfer Terms and conditions (PDF, 197 KB).
        </Col>
      </Row>
    </Col>
  );
};
const RightCol = () => (
  <Col xs={3}>
    <div className="border p-2 rounded">
      <b>You can also:</b>
      <br />
      View upcoming bills payments and transfers &gt;
      <br />
      Stop a payment &gt;
      <br />
      Change your statment preferences &gt;
    </div>
  </Col>
);

export default function RequestCanceled() {
  return (
    <div>
      <Row>
        <Col>
          <h2>REQUEST MONEY</h2>
        </Col>
      </Row>
      <Row>
        <LeftCol />
        <RightCol />
      </Row>
    </div>
  );
}
