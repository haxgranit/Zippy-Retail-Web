import { Tabs, Tab, Table, Button, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import CommonHeader from '../../../common/CommonHeader';
import MonthSelectComponent from '../../../common/MonthSelectComponent';

export default function InteracETransferDetails() {
  const navigate = useNavigate();
  const { tabId } = useParams();
  const selectedTabId = tabId || undefined;

  return (
    <>
      <CommonHeader title="STATUS" print={false} />
      <div>
        <h4>Your Interac e-Transfer Details</h4>
        <ul>
          <li>
            To learn more about the status of an Interac e-Transfer, or to take
            action on any of your transfers, select the text link under the
            status column.
          </li>
          <li>
            You can also view information about your Interac e-Transfer on the
            &quot;Account Details&quot; page. Select the account from which you
            made the transfer to view the details of your transfer in the list
            of transactions
          </li>
        </ul>
        <p>
          Note: The(Requested) status refers to a transfer you sent in response
          to a request for money
        </p>
      </div>
      <Tabs
        defaultActiveKey={selectedTabId || 'sent'}
        transition={false}
        id="status-tab"
        className="mt-2 mb-3"
        onSelect={(tabKey) => {
          navigate(`/interac-etransfer/status/${tabKey}`);
        }}
      >
        <Tab eventKey="sent" title="Sent">
          <MonthSelectComponent />
          <Table className="mt-2">
            <thead>
              <tr
                className="bg-light"
                style={{ borderTop: '1px solid #c5c5c5' }}
              >
                <th>Date Sent</th>
                <th>Contact</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody style={{ borderTop: 'none' }}>
              <tr>
                <td>Nov 2, 2021</td>
                <td>
                  <div>Chelsea Tough</div>
                  <div>chelsea.tough@gmail.com</div>
                </td>
                <td>$2,000.00</td>
                <td>
                  <Button
                    variant="link"
                    className="text-black"
                    onClick={() =>
                      navigate('/interac-etransfer/send-money', {
                        state: { step: 3 },
                      })
                    }
                  >
                    Transfer Completed
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
          <div>
            <Row className="d-flex justify-content-end">
              <Button
                variant="danger"
                className="d-flex"
                style={{ width: 'auto', marginRight: 10 }}
              >
                Send Money
              </Button>
            </Row>
          </div>
        </Tab>
        <Tab eventKey="received" title="Received">
          <MonthSelectComponent />
          <Table className="mt-2">
            <thead>
              <tr
                className="bg-light"
                style={{ borderTop: '1px solid #c5c5c5' }}
              >
                <th>Date Received</th>
                <th>Contact</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody style={{ borderTop: 'none' }}>
              <tr>
                <td>Nov 2, 2021</td>
                <td>
                  <div>Chelsea Tough</div>
                  <div>chelsea.tough@gmail.com</div>
                </td>
                <td>$2,000.00</td>
                <td>
                  <Button
                    variant="link"
                    className="text-black"
                    onClick={() =>
                      navigate('/interac-etransfer/send-money', {
                        state: { step: 3 },
                      })
                    }
                  >
                    Transfer Completed
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="requested" title="Requested">
          <MonthSelectComponent />
          <Table className="mt-2">
            <thead>
              <tr
                className="bg-light"
                style={{ borderTop: '1px solid #c5c5c5' }}
              >
                <th>Date Requested</th>
                <th>Contact</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody style={{ borderTop: 'none' }}>
              <tr>
                <td>Nov 2, 2021</td>
                <td>
                  <div>Chelsea Tough</div>
                  <div>chelsea.tough@gmail.com</div>
                </td>
                <td>$2,000.00</td>
                <td>
                  <Button
                    variant="link"
                    className="text-black"
                    onClick={() => navigate('request-sent')}
                  >
                    Requested
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
          <div>
            <Row className="d-flex justify-content-end">
              <Button
                variant="danger"
                className="d-flex"
                style={{ width: 'auto', marginRight: 10 }}
                onClick={() => navigate('/interac-etransfer/request-money')}
              >
                Request Money
              </Button>
            </Row>
          </div>
        </Tab>
      </Tabs>
    </>
  );
}
