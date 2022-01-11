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
        <Button className="zippy-btn" onClick={() => navigate('/interac-etransfer/request-money')}>
          Send Another Request
        </Button>
      </Stack>
    </Col>
  );
};

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
        <Col xs={3}>
          <QuickLinks />
        </Col>
      </Row>
    </div>
  );
}
