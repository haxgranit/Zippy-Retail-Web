import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useAppSelector } from '../app/hooks';
import { selectUser } from '../features/user/userSlice';

export default function HomeLoggedIn() {
  const user = useAppSelector(selectUser);
  const [expand, setExpand] = useState<string>();
  const toggleExpand = (name: string) => {
    setExpand(expand !== name ? name : undefined);
  };

  return (
    <div className="container" style={{ paddingBottom: '50px' }}>
      <div className="row">
        <div className="col-3">
          <Nav className="flex-column">
            <Nav.Link onClick={() => toggleExpand('My Accounts')}>My Accounts</Nav.Link>
            {expand === 'My Accounts' && (
              <Nav className="flex-column" style={{ marginLeft: '20px' }}>
                <Nav.Link>View Account Details</Nav.Link>
                <Nav.Link>Download Transactions</Nav.Link>
                <Nav.Link>View eStatements</Nav.Link>
                <Nav.Link>Upcoming Bill Payments and Transfers</Nav.Link>
              </Nav>
            )}
            <Nav.Link onClick={() => toggleExpand('Interac e-Transfer')}>Interac e-Transfer</Nav.Link>
            {expand === 'Interac e-Transfer' && (
              <Nav className="flex-column" style={{ marginLeft: '20px' }}>
                <Nav.Link>Status</Nav.Link>
                <Nav.Link>Send Money</Nav.Link>
                <Nav.Link>Request Money</Nav.Link>
                <Nav.Link>Contact List</Nav.Link>
                <Nav.Link>Edit My Profile</Nav.Link>
                <Nav.Link>Autodeposit Settings</Nav.Link>
                <Nav.Link>Receive Money</Nav.Link>
                <Nav.Link>Learn More</Nav.Link>
              </Nav>
            )}
            <Nav.Link onClick={() => toggleExpand('Bill Payments')}>Bill Payments</Nav.Link>
            {expand === 'Bill Payments' && (
              <Nav className="flex-column" style={{ marginLeft: '20px' }}>
                <Nav.Link>Set Up Bill Payments</Nav.Link>
                <Nav.Link>Review and Cancel Bill Payments</Nav.Link>
                <Nav.Link>Add or Edit Billers</Nav.Link>
                <Nav.Link>Biller Details</Nav.Link>
                <Nav.Link>View eBills</Nav.Link>
              </Nav>
            )}
            <Nav.Link onClick={() => toggleExpand('Transfer Funds')}>Transfer Funds</Nav.Link>
            {expand === 'Transfer Funds' && (
              <Nav className="flex-column" style={{ marginLeft: '20px' }}>
                <Nav.Link>EFT</Nav.Link>
                <Nav.Link>Visa Direct</Nav.Link>
                <Nav.Link>Review and Cancel Transfers</Nav.Link>
              </Nav>
            )}
            <Nav.Link>Account Security</Nav.Link>
            <Nav.Link>Customer Services</Nav.Link>
            <Nav.Link>Manage My Alerts</Nav.Link>
            <Nav.Link>Contact Us</Nav.Link>
          </Nav>
        </div>
        <div className="col-9">
          <div style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
          >
            {!user.personal && (
              <div style={{
                border: 'dashed',
                float: 'right',
                padding: '20px',
                textAlign: 'center',
                width: '200',
              }}
              >
                PLACEHOLDER: Option to sign up for a personal account
              </div>
            )}
            {!user.business && (
              <div style={{
                border: 'dashed',
                float: 'right',
                padding: '20px',
                textAlign: 'center',
                width: '200',
              }}
              >
                PLACEHOLDER: Option to sign up for a business account
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
