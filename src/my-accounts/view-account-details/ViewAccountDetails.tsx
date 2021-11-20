import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';

export default function ViewAccountDetails() {
  return (
    <div className="container">
      <h2>DEPOSIT ACCOUNT DETAILS</h2>
      <p>
        Receive notifications when
        {' '}
        <u>held funds are released</u>
        {' '}
        and are available to you; when you exceed your bank machine withdrawal and your Point of
        Sale daily limit.
      </p>
      <div className="row">
        <div className="col-6">
          <Form.Select>
            <option>Chequing (01702-81-99639) $2,260.57</option>
          </Form.Select>
        </div>
        <div className="col-6 text-end">
          <DropdownButton as={ButtonGroup} title="Manage My Account" variant="outline-primary">
            <Dropdown.Item>Manage My Account</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div className="border-primary mt-4 pt-4 pb-2" style={{ backgroundColor: '#f4f4f4', borderTop: '3px solid' }}>
        <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
          <div className="col-6">
            <div className="d-flex justify-content-between">
              <h3>Balance:</h3>
              <h3>$2,260.57</h3>
            </div>
            <div className="d-flex justify-content-between">
              <span>Funds on Hold:</span>
              <span>$0.00</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Overdraft Limit:</span>
              <span>N/A</span>
            </div>
            <div className="d-flex justify-content-between">
              <strong>Available Funds:</strong>
              <strong>$2,260.57</strong>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <div><strong>Product Name:</strong></div>
                <div>Everyday® Checking</div>
                <div><strong>Statement Option:</strong></div>
                <div>View and Edit</div>
              </div>
              <div className="col-6">
                <div>
                  <strong>Transit Number:</strong>
                  {' '}
                  01702
                </div>
                <div>
                  <strong>Institution Number:</strong>
                  {' '}
                  010
                </div>
                <div>
                  <strong>Account Number:</strong>
                  {' '}
                  8199639
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <div><strong>Daily ATM Widthdrawal Limit</strong></div>
                <div>$3,000.00</div>
              </div>
              <div className="col-6">
                <div><strong>Daily Debit Purchase Limit</strong></div>
                <div>$3,000.00</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Button variant="outline-primary">View Upcoming Bills and Transfers</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
