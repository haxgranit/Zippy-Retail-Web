import Nav from 'react-bootstrap/Nav';
import { NavLink, useLocation } from 'react-router-dom';

export default function VerticalNavLinks() {
  const { pathname } = useLocation();

  return (
    <Nav className="flex-column">
      <Nav.Link as={NavLink} to="/my-accounts">My Accounts</Nav.Link>
      {pathname.startsWith('/my-accounts') && (
        <Nav className="flex-column" style={{ marginLeft: '20px' }}>
          <Nav.Link as={NavLink} to="/my-accounts/view-account-details">View Account Details</Nav.Link>
          <Nav.Link as={NavLink} to="/my-accounts/download-transactions">Download Transactions</Nav.Link>
          <Nav.Link as={NavLink} to="/my-accounts/view-estatements">View eStatements</Nav.Link>
          {pathname.startsWith('/my-accounts/view-estatements') && (
            <Nav className="flex-column" style={{ marginLeft: '20px' }}>
              <Nav.Link as={NavLink} to="/my-accounts/view-estatements/statement-preferences">Statement Preferences</Nav.Link>
            </Nav>
          )}
          <Nav.Link as={NavLink} to="/my-accounts/upcoming-bill-payments-and-transfers">Upcoming Bill Payments and Transfers</Nav.Link>
        </Nav>
      )}
      <Nav.Link as={NavLink} to="/interac-etransfer">Interac e-Transfer</Nav.Link>
      {pathname.startsWith('/interac-etransfer') && (
        <Nav className="flex-column" style={{ marginLeft: '20px' }}>
          <Nav.Link as={NavLink} to="/interac-etransfer/status">Status</Nav.Link>
          <Nav.Link as={NavLink} to="/interac-etransfer/send-money">Send Money</Nav.Link>
          <Nav.Link as={NavLink} to="/interac-etransfer/request-money">Request Money</Nav.Link>
          <Nav.Link as={NavLink} to="/interac-etransfer/contact-list">Contact List</Nav.Link>
          <Nav.Link as={NavLink} to="/interac-etransfer/edit-my-profile">Edit My Profile</Nav.Link>
          <Nav.Link as={NavLink} to="/interac-etransfer/autodeposit-settings">Autodeposit Settings</Nav.Link>
          <Nav.Link as={NavLink} to="/interac-etransfer/receive-money">Receive Money</Nav.Link>
          <Nav.Link as={NavLink} to="/interac-etransfer/learn-more">Learn More</Nav.Link>
        </Nav>
      )}
      <Nav.Link as={NavLink} to="/bill-payments">Bill Payments</Nav.Link>
      {pathname.startsWith('/bill-payments') && (
        <Nav className="flex-column" style={{ marginLeft: '20px' }}>
          <Nav.Link as={NavLink} to="/bill-payments/set-up-bill-payments">Set Up Bill Payments</Nav.Link>
          <Nav.Link as={NavLink} to="/bill-payments/review-and-cancel-bill-payments">Review and Cancel Bill Payments</Nav.Link>
          <Nav.Link as={NavLink} to="/bill-payments/add-or-edit-billers">Add or Edit Billers</Nav.Link>
          <Nav.Link as={NavLink} to="/bill-payments/biller-details">Biller Details</Nav.Link>
          <Nav.Link as={NavLink} to="/bill-payments/view-ebills">View eBills</Nav.Link>
        </Nav>
      )}
      <Nav.Link as={NavLink} to="/transfer-funds">Transfer Funds</Nav.Link>
      {pathname.startsWith('/transfer-funds') && (
        <Nav className="flex-column" style={{ marginLeft: '20px' }}>
          <Nav.Link as={NavLink} to="/transfer-funds/eft">EFT</Nav.Link>
          <Nav.Link as={NavLink} to="/transfer-funds/visa-direct">Visa Direct</Nav.Link>
          <Nav.Link as={NavLink} to="/transfer-funds/review-and-cancel-transfers">Review and Cancel Transfers</Nav.Link>
        </Nav>
      )}
      <Nav.Link as={NavLink} to="/account-security">Account Security</Nav.Link>
      <Nav.Link as={NavLink} to="/customer-services">Customer Services</Nav.Link>
      <Nav.Link as={NavLink} to="/manage-my-alerts">Manage My Alerts</Nav.Link>
      <Nav.Link as={NavLink} to="/contact-us">Contact Us</Nav.Link>
    </Nav>
  );
}
