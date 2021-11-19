import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';

export default function ViewAccountDetails() {
  return (
    <div>
      <h2>DEPOSIT ACCOUNT DETAILS</h2>
      <p>
        Receive notifications when
        {' '}
        <u>held funds are released</u>
        {' '}
        and are available to you; when you exceed your bank machine withdrawal and your Point of
        Sale daily limit.
      </p>
      <div className="d-flex justify-content-between">
        <Form.Select className="w-auto">
          <option>Chequing (01702-81-99639) $2,260.57</option>
        </Form.Select>
        <DropdownButton as={ButtonGroup} title="Manage My Account" variant="outline-primary">
          <Dropdown.Item>Manage My Account</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="border-primary mt-4" style={{ backgroundColor: '#f4f4f4', borderTop: '3px solid' }}>
        <div className="p-2 w-50">
          <div className="d-flex justify-content-between">
            <span>Balance:</span>
            <span>$2,260.57</span>
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
            <span>Available Funds:</span>
            <span>$2,260.57</span>
          </div>
        </div>
        <div className="p-2 w-50" />
      </div>
    </div>
  );
}
