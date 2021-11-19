import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import placeholder from './ViewAccountDetails.png';

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
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Form.Select style={{ flex: '0 0 50%' }}>
          <option>Chequing (01702-81-99639) $2,260.57</option>
        </Form.Select>
        <DropdownButton as={ButtonGroup} title="Manage My Account" variant="outline-primary" style={{ flex: '0 0 25%' }}>
          <Dropdown.Item>TODO</Dropdown.Item>
        </DropdownButton>
        {/* <Dropdown>
          <Dropdown.Toggle>
            <button type="button">Dropdown Button</button>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Action</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </div>
      <img src={placeholder} alt="placeholder" style={{ width: '100%' }} />
    </div>
  );
}
