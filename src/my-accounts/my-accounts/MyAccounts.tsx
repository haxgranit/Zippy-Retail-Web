import React from 'react';
import {
  Alert,
  Card,
  Form,
  InputGroup,
  FormControl,
  Button,
  Nav,
} from 'react-bootstrap';
import CommonHeader from './components/CommonHeader';
import PrintIcon from './icons/print.png';

export default function MyAccounts() {
  return (
    <>
      <CommonHeader title="My Accounts" print />
      <div>
        <div className="d-flex justify-content-between">
          <p>
            Welcome DUANE TOUGH. Your last visit: November 9, 2021 at 4:54 p.m.
            ET
          </p>
          <div className="d-flex">
            <img
              src={PrintIcon}
              alt="placeholder"
              style={{ width: 20, height: 25, marginRight: 10 }}
            />
            <p>Online Security Guarantee</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            <Alert variant="primary">
              <div className="d-flex align-items-center">
                <img src={PrintIcon} alt="placeholder" style={{ width: 40, height: 45, marginRight: 10 }} />
                <div>
                  <h3>COVID-19 Support</h3>
                  <p>
                    We
                    {'&apos;'}
                    re commited to supporting you. Find the latest information
                    and available resources.
                  </p>
                  <div className="d-flex justify-content-end">
                    <a href="/home" className="text-danger">
                      Go to COVID-19 Support
                      {' >'}
                    </a>
                  </div>
                </div>
              </div>
            </Alert>
            <Alert variant="primary" dismissible>
              <p style={{ marginTop: 10 }}>
                You
                {'&lsquo;'}
                ve been rewarded with a new offer.
                <a href="/">Check out your offer now before it expires!</a>
              </p>
            </Alert>
            <div className="row">
              <div className="col-md-3 text-center d-flex flex-column align-items-center justify-content-center border-right">
                <p>Deposit Accounts</p>
                <p>$37,139.59</p>
              </div>
              <div className="col-md-3 text-center d-flex flex-column align-items-center justify-content-center border-left">
                <p>+</p>
                <p>Apply for a new product</p>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <p style={{ margin: 'auto' }}>View: </p>
                <Nav>
                  <Nav.Link>List</Nav.Link>
                  <Nav.Link>Pie Charts</Nav.Link>
                </Nav>
              </div>
              <h5>Balance</h5>
            </div>
          </div>
          <div className="col-md-3">
            <Card className="p-3 bg-white">
              <Card.Title>
                Quick Transfer
              </Card.Title>
              <Card.Body>
                <p>Cant find your account in the list?</p>
                <Form.Label>From:</Form.Label>
                <Form.Select>
                  <option>Choose an account</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Label>To:</Form.Label>
                <Form.Select>
                  <option>Choose an account</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Label>Amount:</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                  <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <Button variant="danger">Next</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
