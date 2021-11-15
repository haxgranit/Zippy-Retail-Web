import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function HorizontalNavLinks() {
  return (
    <Nav className="me-auto">
      <NavDropdown title="Accounts">
        <NavDropdown.Item>Accounts Overview</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>View all accounts</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>Statements & Documents</NavDropdown.Item>
        <NavDropdown.Item>Spending & Budgeting</NavDropdown.Item>
        <NavDropdown.Item>Alerts</NavDropdown.Item>
        <NavDropdown.Item>My Financial Picture</NavDropdown.Item>
        <NavDropdown.Item>Manage account settings</NavDropdown.Item>
        <NavDropdown.Item>Open an account</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Bill Pay">
        <NavDropdown.Item>Pay a Bill</NavDropdown.Item>
        <NavDropdown.Item>Payment Center</NavDropdown.Item>
        <NavDropdown.Item>Activity</NavDropdown.Item>
        <NavDropdown.Item>Manage accounts</NavDropdown.Item>
        <NavDropdown.Item>Help</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Send | Receive">
        <NavDropdown.Item>Between my accounts</NavDropdown.Item>
        <NavDropdown.Item>To someone else&apos;s account</NavDropdown.Item>
        <NavDropdown.Item>To/from other banks (including wires)</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>Interac</NavDropdown.Item>
        <NavDropdown.Item>Send money</NavDropdown.Item>
        <NavDropdown.Item>Activity</NavDropdown.Item>
        <NavDropdown.Item>Recipients</NavDropdown.Item>
        <NavDropdown.Item>Settings</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Rewards & Deals">
        <NavDropdown.Item>Special offers</NavDropdown.Item>
        <NavDropdown.Item>My Rewards</NavDropdown.Item>
        <NavDropdown.Item>Funzpoints</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Security Center">
        <NavDropdown.Item>Overview</NavDropdown.Item>
        <NavDropdown.Item>Change Online ID</NavDropdown.Item>
        <NavDropdown.Item>Change Passcode</NavDropdown.Item>
        <NavDropdown.Item>Set up two-factor authentication</NavDropdown.Item>
        <NavDropdown.Item>Alert settings</NavDropdown.Item>
        <NavDropdown.Item>Secure your device</NavDropdown.Item>
        <NavDropdown.Item>Security tips and articles</NavDropdown.Item>
        <NavDropdown.Item>Report suspicious activity</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Open an Account">
        <NavDropdown.Item>Open a new account</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Help & Support">
        <NavDropdown.Item>Contact us</NavDropdown.Item>
        <NavDropdown.Item>Message center</NavDropdown.Item>
        <NavDropdown.Item>Schedule an appointment</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>Change Online ID</NavDropdown.Item>
        <NavDropdown.Item>Change Passcode</NavDropdown.Item>
        <NavDropdown.Item>Manage Balance Connect (TM) for overdraft protection</NavDropdown.Item>
        <NavDropdown.Item>Set Security Preferences</NavDropdown.Item>
        <NavDropdown.Item>Update my contact information</NavDropdown.Item>
        <NavDropdown.Item>Manage alerts</NavDropdown.Item>
        <NavDropdown.Item>Report suspicious activity</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}
