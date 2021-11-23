import { Tabs, Tab } from 'react-bootstrap';
import CommonHeader from '../my-accounts/my-accounts/components/CommonHeader';

export default function Status() {
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
        defaultActiveKey="sent"
        transition={false}
        id="status-tab"
        className="mt-2 mb-3"
      >
        <Tab eventKey="sent" title="Sent">
          <>Sent Content</>
        </Tab>
        <Tab eventKey="received" title="Received">
          <>Received Content</>
        </Tab>
        <Tab eventKey="requested" title="Requested">
          <>Requested Content</>
        </Tab>
      </Tabs>
    </>
  );
}
