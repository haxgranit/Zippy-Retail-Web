import
{
  Button,
  Col,
  Row,
  Stack,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Divider from '../components/Divider';
import QuickLinks from '../components/QuickLinks';

const LeftCol = () => {
  const navigate = useNavigate();
  return (
    <Col xs={9}>
      <span>
        <i />
        A reminder has been sent
      </span>
      <br />
      Request Reminder Sent.
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
    </Col>
  );
};

export default function RequestReminder() {
  return (
    <div>
      <Row>
        <Col>
          <h2>REQUEST REMINDER</h2>
        </Col>
      </Row>
      <Row>
        <LeftCol />
        <QuickLinks />
      </Row>
    </div>
  );
}
