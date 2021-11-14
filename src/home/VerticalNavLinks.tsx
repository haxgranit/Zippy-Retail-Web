import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useLocation } from 'react-router-dom';

export default function VerticalNavLinks() {
  const [expand, setExpand] = useState<string>();
  const toggleExpand = (name: string) => {
    setExpand(expand !== name ? name : undefined);
  };

  const { pathname } = useLocation();

  return (
    <Nav className="flex-column">
      <Nav.Link as={NavLink} to="/my-accounts">My Accounts</Nav.Link>
      {pathname.startsWith('/my-accounts') && (
        <Nav className="flex-column" style={{ marginLeft: '20px' }}>
          <Nav.Link as={NavLink} to="/my-accounts/view-account-details">View Account Details</Nav.Link>
          <Nav.Link as={NavLink} to="/my-accounts/download-transactions">Download Transactions</Nav.Link>
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
  );
}
