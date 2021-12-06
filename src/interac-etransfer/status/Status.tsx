import {
  Tabs,
  Tab,
  Form,
  Table,
  Button,
  Row,
  Col,
} from 'react-bootstrap';
import CommonHeader from '../../common/CommonHeader';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getDateAry = () => {
  const dateVal = new Date();
  const year = dateVal.getFullYear();
  const prevYear = year * 1 - 1;
  const currMonth = dateVal.getMonth();
  const result: any = [{
    label: year,
    items: [],
  }, {
    label: prevYear,
    items: [],
  }];

  for (let i = 0; i < 12; i += 1) {
    let dateStr = '';
    if (currMonth - i < 0) {
      dateStr = `${MONTH_NAMES[currMonth - i]} ${prevYear}`;
      const item = {
        value: dateStr,
        currMonth,
        currYear: year,
      };
      if (!result[0]) {
        result[0] = [];
      }
      result[0].items.push(item);
    } else {
      dateStr = `${MONTH_NAMES[currMonth - i]} ${year}`;
      const item = {
        value: dateStr,
        currMonth,
        currYear: year,
      };
      if (!result[1]) {
        result[1] = [];
      }
      result[1].items.push(item);
    }
  }
  return result;
};

export default function Status() {
  const dateAry = getDateAry();
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
          <Form.Select style={{ maxWidth: 300 }}>
            {dateAry.map((item: any) => (
              <optgroup label={`${item.label}`} key={`sent_${item.label}`}>
                {item.items.map((dateValue: any) => (
                  <option value={dateValue.value} key={`sent_${dateValue.value}`}>{dateValue.value}</option>
                ))}
              </optgroup>
            ))}
          </Form.Select>
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
                  <Button variant="link" className="text-black">
                    Transfer Completed
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
          <div
            className="mt-4 p-3"
            style={{
              borderTop: '1px solid #e5e5e5',
              borderBottom: '1px solid #e5e5e5',
            }}
          >
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
          <div className="mt-2">
            <div className="d-flex">
              <div
                style={{
                  width: 20,
                  height: 25,
                  border: '1px dotted grey',
                  textAlign: 'center',
                  marginRight: 10,
                }}
              >
                P
              </div>
              <span style={{ fontWeight: 'bold' }}>Note:</span>
            </div>
            <p className="d-flex align-items-end">
              <span>Your use of Interac e-Transfer is subject to the </span>
              <Row>
                <Col md={12} className="d-flex align-items-center mt-2">
                  <div
                    style={{
                      width: 20,
                      height: 25,
                      border: '1px dotted grey',
                      textAlign: 'center',
                      marginRight: 10,
                    }}
                  >
                    P
                  </div>
                  <span>
                    Interac e-Transfer Terms and Conditions (PDF, 197KB).
                  </span>
                </Col>
              </Row>
            </p>
          </div>
        </Tab>
        <Tab eventKey="received" title="Received">
          <Form.Select style={{ maxWidth: 300 }}>
            {dateAry.map((item: any) => (
              <optgroup label={`${item.label}`} key={`received_${item.label}`}>
                {item.items.map((dateValue: any) => (
                  <option value={dateValue.value} key={`received_${dateValue.value}`}>{dateValue.value}</option>
                ))}
              </optgroup>
            ))}
          </Form.Select>
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
                  <Button variant="link" className="text-black">
                    Transfer Completed
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="mt-2">
            <div className="d-flex">
              <div
                style={{
                  width: 20,
                  height: 25,
                  border: '1px dotted grey',
                  textAlign: 'center',
                  marginRight: 10,
                }}
              >
                P
              </div>
              <span style={{ fontWeight: 'bold' }}>Note:</span>
            </div>
            <p className="d-flex align-items-end">
              <span>Your use of Interac e-Transfer is subject to the </span>
              <Row>
                <Col md={12} className="d-flex align-items-center mt-2">
                  <div
                    style={{
                      width: 20,
                      height: 25,
                      border: '1px dotted grey',
                      textAlign: 'center',
                      marginRight: 10,
                    }}
                  >
                    P
                  </div>
                  <span>
                    Interac e-Transfer Terms and Conditions (PDF, 197KB).
                  </span>
                </Col>
              </Row>
            </p>
          </div>
        </Tab>
        <Tab eventKey="requested" title="Requested">
          <Form.Select style={{ maxWidth: 300 }}>
            {dateAry.map((item: any) => (
              <optgroup label={`${item.label}`} key={`requested_${item.label}`}>
                {item.items.map((dateValue: any) => (
                  <option value={dateValue.value} key={`requested_${dateValue.value}`}>{dateValue.value}</option>
                ))}
              </optgroup>
            ))}
          </Form.Select>
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
                  <Button variant="link" className="text-black">
                    Requested
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
          <div
            className="mt-4 p-3"
            style={{
              borderTop: '1px solid #e5e5e5',
              borderBottom: '1px solid #e5e5e5',
            }}
          >
            <Row className="d-flex justify-content-end">
              <Button
                variant="danger"
                className="d-flex"
                style={{ width: 'auto', marginRight: 10 }}
              >
                Request Money
              </Button>
            </Row>
          </div>
          <div className="mt-2">
            <div className="d-flex">
              <div
                style={{
                  width: 20,
                  height: 25,
                  border: '1px dotted grey',
                  textAlign: 'center',
                  marginRight: 10,
                }}
              >
                P
              </div>
              <span style={{ fontWeight: 'bold' }}>Note:</span>
            </div>
            <p className="d-flex align-items-end">
              <span>Your use of Interac e-Transfer is subject to the </span>
              <Row>
                <Col md={12} className="d-flex align-items-center mt-2">
                  <div
                    style={{
                      width: 20,
                      height: 25,
                      border: '1px dotted grey',
                      textAlign: 'center',
                      marginRight: 10,
                    }}
                  >
                    P
                  </div>
                  <span>
                    Interac e-Transfer Terms and Conditions (PDF, 197KB).
                  </span>
                </Col>
              </Row>
            </p>
          </div>
        </Tab>
      </Tabs>
    </>
  );
}
