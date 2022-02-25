import Nav from 'react-bootstrap/Nav';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ZippyCashLogo from '../assets/img/general/ZippyCash_Logo.svg';
import { Version } from '../Version';

export default function VerticalNavLinks() {
  const { pathname } = useLocation();

  return (
    <div className="vertical-nav-wrapper">
      <Nav className="vertical-nav">
        <div className="nav-items noselect">
          <Link to="/my-wallet" className="navbar-brand">
            <img src={ZippyCashLogo} alt="" />
          </Link>
          <Nav.Link className="nav-link" id="my-account-link" as={NavLink} to="/my-account">
            <i className="zippy-cash-icon zc-home" />
            My Account
            <i className="dropdown zippy-cash-icon zc-up" />
          </Nav.Link>
          {pathname.startsWith('/my-account') && (
            <Nav className="flex-column" style={{ marginLeft: '20px' }}>
              <Nav.Link as={NavLink} to="/my-account/account">Account</Nav.Link>
              <Nav.Link as={NavLink} to="/my-account/download-transactions">Download Transactions</Nav.Link>
              <Nav.Link as={NavLink} to="/my-account/view-estatements">View E-Statements</Nav.Link>
            </Nav>
          )}
          <Nav.Link className="nav-link" as={NavLink} to="/my-wallet">
            <i className="zippy-cash-icon zc-interac-etransfer" />
            My Wallet
            <i className="dropdown zippy-cash-icon zc-up" />
          </Nav.Link>
          {pathname.startsWith('/my-wallet') && (
            <Nav className="flex-column" style={{ marginLeft: '20px' }}>
              <Nav.Link as={NavLink} to="/my-wallet/zippy-money">Zippy Money</Nav.Link>
              <Nav.Link as={NavLink} to="/my-wallet/transaction-history">Transaction History</Nav.Link>
              <Nav.Link as={NavLink} to="/my-wallet/load">Load</Nav.Link>
              <Nav.Link as={NavLink} to="/my-wallet/get">Get</Nav.Link>
              <Nav.Link as={NavLink} to="/my-wallet/funding-source">Funding Source</Nav.Link>
              <Nav.Link as={NavLink} to="/my-wallet/auto-deposit">Auto Deposit</Nav.Link>
            </Nav>
          )}
          <Nav.Link className="nav-link" as={NavLink} to="/bill-payments">
            <i className="zippy-cash-icon zc-bill-payments" />
            Bill Payments
          </Nav.Link>
          <Nav.Link className="nav-link" as={NavLink} to="/account-security">
            <i className="zippy-cash-icon zc-account-security" />
            Account Security
          </Nav.Link>
          <hr />
          <Nav.Link className="nav-link" as={NavLink} to="/customer-services">
            <i className="zippy-cash-icon zc-customer-services" />
            Customer Services
          </Nav.Link>
          <Nav.Link className="nav-link" as={NavLink} to="/manage-my-alerts">
            <i className="zippy-cash-icon zc-manage-my-alerts" />
            Manage My Alerts
          </Nav.Link>
          <Nav.Link className="nav-link" as={NavLink} to="/contact-us">
            <i className="zippy-cash-icon zc-contact-us" />
            Contact Us
          </Nav.Link>
        </div>
        <div className="copyright">
          <Version />
          <div className="noselect">
            © 2021 Zippy Cash LLC
          </div>
        </div>
      </Nav>
    </div>
  );
}
