import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

export default function HomeLoggedIn() {
  const [expand, setExpand] = useState<{ [name: string]: boolean }>({});
  const toggleExpand = (name: string) => {
    console.log('name', name);
    const expandUpdate = { ...expand };
    expandUpdate[name] = !expandUpdate[name];
    setExpand(expandUpdate);
  };

  console.log('expand', expand);

  return (
    <div className="container" style={{ paddingBottom: '50px' }}>
      <div className="row">
        <div className="col-12">
          <Nav className="flex-column">
            <Nav.Link onClick={() => toggleExpand('My Accounts')}>My Accounts</Nav.Link>
            {expand['My Accounts'] && (
              <Nav className="flex-column" style={{ marginLeft: '20px' }}>
                <Nav.Link>View Account Details</Nav.Link>
                <Nav.Link>Download Translations</Nav.Link>
                <Nav.Link>View eStatements</Nav.Link>
                <Nav.Link>Savings Goals</Nav.Link>
                <Nav.Link>Net Worth</Nav.Link>
                <Nav.Link>Upcoming Bill Payments and Transfers</Nav.Link>
              </Nav>
            )}
            <Nav.Link>Bill Payments</Nav.Link>
            <Nav.Link>Transfer Funds</Nav.Link>
            <Nav.Link>Interac e-Transfer</Nav.Link>
            <Nav.Link>Global Money Transfer</Nav.Link>
            <Nav.Link>Order Foreign Cash</Nav.Link>
            <Nav.Link>Buy Gold and Silver</Nav.Link>
            <Nav.Link>Account Security</Nav.Link>
            <Nav.Link>Customer Services</Nav.Link>
            <Nav.Link>Manage My Alerts</Nav.Link>
            <Nav.Link>Contact Us</Nav.Link>
          </Nav>
        </div>
      </div>
    </div>
  );
}