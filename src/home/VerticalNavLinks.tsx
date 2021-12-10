import Nav from 'react-bootstrap/Nav';
import { NavLink, useLocation } from 'react-router-dom';

export default function VerticalNavLinks() {
  const { pathname } = useLocation();

  return (
    <Nav className="flex-column">
      <Nav.Link as={NavLink} to="/my-accounts" className="nav-link">My Accounts</Nav.Link>
      {pathname.startsWith('/my-accounts') && (
        <Nav className="flex-column" style={{ marginLeft: '20px' }}>
          <Nav.Link as={NavLink} to="/my-accounts/view-account-details" className="nav-link">View Account Details</Nav.Link>
          <Nav.Link as={NavLink} to="/my-accounts/download-transactions" className="nav-link">Download Transactions</Nav.Link>
          <Nav.Link as={NavLink} to="/my-accounts/view-estatements" className="nav-link">View eStatements</Nav.Link>
          {pathname.startsWith('/my-accounts/view-estatements') && (
            <Nav className="flex-column" style={{ marginLeft: '20px' }}>
              <Nav.Link as={NavLink} to="/my-accounts/view-estatements/statement-preferences" className="nav-link">Statement Preferences</Nav.Link>
            </Nav>
          )}
          <Nav.Link as={NavLink} to="/my-accounts/upcoming-bill-payments-and-transfers" className="nav-link">Upcoming Bill Payments and Transfers</Nav.Link>
        </Nav>
      )}
      <Nav.Link as={NavLink} to="/interac-etransfer" className="nav-link">Interac e-Transfer</Nav.Link>
      {pathname.startsWith('/interac-etransfer') && (
        <Nav className="flex-column" style={{ marginLeft: '20px' }}>
          <Nav.Link as={NavLink} to="/interac-etransfer/status" className="nav-link">Status</Nav.Link>
          <Nav.Link as={NavLink} to="/interac-etransfer/send-money" className="nav-link">Send Money</Nav.Link>
          <Nav.Link as={NavLink} to="/interac-etransfer/request-money" className="nav-link">Request Money</Nav.Link>
          <Nav.Link as={NavLink} to="/interac-etransfer/contact-list" className="nav-link">Contact List</Nav.Link>
          <Nav.Link as={NavLink} to="/interac-etransfer/edit-my-profile" className="nav-link">Edit My Profile</Nav.Link>
          <Nav.Link as={NavLink} to="/interac-etransfer/autodeposit-settings" className="nav-link">Autodeposit Settings</Nav.Link>
          <Nav.Link as={NavLink} to="/interac-etransfer/receive-money" className="nav-link">Receive Money</Nav.Link>
          <Nav.Link as={NavLink} to="/interac-etransfer/learn-more" className="nav-link">Learn More</Nav.Link>
        </Nav>
      )}
      <Nav.Link as={NavLink} to="/bill-payments" className="nav-link">Bill Payments</Nav.Link>
      {pathname.startsWith('/bill-payments') && (
        <Nav className="flex-column" style={{ marginLeft: '20px' }}>
          <Nav.Link as={NavLink} to="/bill-payments/set-up-bill-payments" className="nav-link">Set Up Bill Payments</Nav.Link>
          <Nav.Link as={NavLink} to="/bill-payments/review-and-cancel-bill-payments" className="nav-link">Review and Cancel Bill Payments</Nav.Link>
          <Nav.Link as={NavLink} to="/bill-payments/add-or-edit-billers" className="nav-link">Add or Edit Billers</Nav.Link>
          <Nav.Link as={NavLink} to="/bill-payments/biller-details" className="nav-link">Biller Details</Nav.Link>
          <Nav.Link as={NavLink} to="/bill-payments/view-ebills" className="nav-link">View eBills</Nav.Link>
        </Nav>
      )}
      <Nav.Link as={NavLink} to="/transfer-funds" className="nav-link">Transfer Funds</Nav.Link>
      {pathname.startsWith('/transfer-funds') && (
        <Nav className="flex-column" style={{ marginLeft: '20px' }}>
          <Nav.Link as={NavLink} to="/transfer-funds/zippy-to-zippy" className="nav-link">Zippy to Zippy</Nav.Link>
          <Nav.Link as={NavLink} to="/transfer-funds/eft" className="nav-link">EFT</Nav.Link>
          <Nav.Link as={NavLink} to="/transfer-funds/visa-direct" className="nav-link">Visa Direct</Nav.Link>
          <Nav.Link as={NavLink} to="/transfer-funds/review-and-cancel-transfers" className="nav-link">Review and Cancel Transfers</Nav.Link>
        </Nav>
      )}
      <Nav.Link as={NavLink} to="/account-security" className="nav-link">Account Security</Nav.Link>
      <Nav.Link as={NavLink} to="/customer-services" className="nav-link">Customer Services</Nav.Link>
      <Nav.Link as={NavLink} to="/manage-my-alerts" className="nav-link">Manage My Alerts</Nav.Link>
      <Nav.Link as={NavLink} to="/contact-us" className="nav-link">Contact Us</Nav.Link>
    </Nav>
  );
}
