import
{
  Button,
  Col,
  Row,
  Stack,
} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import CommonPageContainer from '../../../../common/CommonPageContainer';
import QuickLinks from '../../components/QuickLinks';
import Breadcrumbs, { Crumb } from '../../../../common/Breadcrumbs';

export default function RequestReminder() {
  const navigate = useNavigate();
  const { id } = useParams();
  const crumbs = [
    { label: 'Status', link: '/interac-etransfer/status' },
    { label: 'Requested', link: '/interac-etransfer/status/requested' },
    { label: 'Transfer Pending', link: `/interac-etransfer/status/requested/pending/${id}` },
    { label: 'Request Reminder' },
  ] as Array<Crumb>;

  return (
    <>
      <CommonPageContainer title="Status">
        <Row>
          <Col xs={9} className="transaction-details">
            <Breadcrumbs
              crumbs={crumbs}
            />
            <h2>Request Reminder Sent</h2>
            <Row>
              <Col>
                <ul>
                  <li>
                    A reminder has been sent
                  </li>
                </ul>
              </Col>
            </Row>
            <div className="details">
              <Row>
                <Col xs={4}>TO:</Col>
                <Col xs={6}>
                  Kent Ulrich
                  <br />
                  kentu@shw.ca
                </Col>
              </Row>
              <Row>
                <Col xs={4}>Amount:</Col>
                <Col xs={6}>$10.00</Col>
              </Row>
              <Stack gap={3} direction="horizontal">
                <Button
                  className="zippy-btn zippy-flat d-flex"
                  onClick={() => navigate(`/interac-etransfer/status/requested/pending/${id}`)}
                >
                  Return to Status
                </Button>
                <Button
                  className="zippy-btn d-flex ms-auto"
                  onClick={() => navigate('/interac-etransfer/request-money')}
                >
                  Send Another Request
                </Button>
              </Stack>
            </div>
          </Col>
          <Col xs={3}>
            <QuickLinks />
            <div className="quick-tips">
              <h4>Your Interac e-Transfer Details</h4>
              <ul>
                <li>
                  You can also view information about your Interac® e-Transfer on the
                  &quot;Account Details&quot; page. Select the account from which you made the
                  transfer to view the details of your transfer in the list of
                  transactions
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </CommonPageContainer>
    </>
  );
}
