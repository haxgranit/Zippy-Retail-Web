import { useState } from 'react';
import
{
  Button,
  Col,
  Form,
  Row,
  Stack,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import QuickLinks from '../../components/QuickLinks';
import CommonPageContainer from '../../../../common/CommonPageContainer';
import Breadcrumbs, { Crumb } from '../../../../common/Breadcrumbs';

const LeftCol = () => {
  const [sendReminderChecked, setSendReminderChecked] = useState(true);
  const navigate = useNavigate();

  const handleNext = () => {
    if (sendReminderChecked) navigate('/interac-etransfer/status/request-reminder');
  };

  return (
    <>
      <Col xs={9}>
        <h6>Transaction Completed</h6>
        <Row className="align-items-center mt-4">
          <Col xs={4}>TO:</Col>
          <Col xs={6}>
            Kent Ulrich
            <br />
            kentu@shw.ca
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs={4}>Amount:</Col>
          <Col xs={6}>$10.00</Col>
        </Row>
        <Row className="align-items-center">
          <Col xs={4}>Deposit to:</Col>
          <Col xs={6}>010-01702-9199639</Col>
        </Row>
        <Row className="mt-2">
          <Col xs={4}>This Request Will Expire On</Col>
          <Col xs={6}>Jan 2,2022</Col>
        </Row>
        <Row className="align-items-center">
          <Col xs={4}>Actions</Col>
          <Col xs={6}>
            <Form.Check
              type="radio"
              className="actions"
              label="Send Reminder to Contact"
              name="Actions"
              onChange={() => setSendReminderChecked(true)}
              checked={sendReminderChecked}
            />
            <Form.Check
              type="radio"
              className="actions"
              label="Cancel the Request"
              name="Actions"
              onChange={() => setSendReminderChecked(false)}
              checked={!sendReminderChecked}
            />
          </Col>
        </Row>
        <Stack gap={3} direction="horizontal">
          <Button
            variant="outline-primary ms-auto"
            onClick={() => navigate('/interac-etransfer/status')}
          >
            Back
          </Button>
          <Button onClick={handleNext}>Next</Button>
        </Stack>
      </Col>
    </>
  );
};

export default function SentCompleted() {
  return (
    <>
      <CommonPageContainer title="Status">
        <Breadcrumbs
          crumbs={
            [
              { label: 'Status', link: '/interac-etransfer/status' },
              { label: 'Sent Money', link: '/interac-etransfer/status/sent' },
              { label: 'Transfer Sent' },
            ] as Array<Crumb>
          }
        />
        <Row>
          <LeftCol />
          <QuickLinks />
        </Row>
      </CommonPageContainer>
    </>
  );
}
