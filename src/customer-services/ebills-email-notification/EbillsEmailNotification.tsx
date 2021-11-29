import { Button, Col, Row } from 'react-bootstrap';
import CommonHeader from '../../common/CommonHeader';

export default function EbillsEmailNotification() {
  return (
    <>
      <CommonHeader title="Ebills Email Notification" print={false} />
      <b>Step: 1 - 2</b>
      <div className="pt-3 pb-3">
        <p>
          To use the eBills notification, you need to be registered for the
          eBills service.
        </p>
        <p>
          In partnership with epost from Canada Post, you can receive, view and
          pay bills from participating companies in personal inbox accessible
          through CIBC Banking.
        </p>
        <p>
          When you access the eBills service, your customer, bill and payment
          information is private and secure.
        </p>
        <p>
          To register for eBills, you must have a valid home phone number or
          business phone numberr on file with CIBC. Please make sure your
          profile is up to date with this information before you continue
        </p>
      </div>
      <Row className="pt-3 pb-3" style={{ borderTop: '1px solid #c5c1c1' }}>
        <Col md="12" className="d-flex justify-content-end">
          <Button variant="danger">Register for eBills</Button>
        </Col>
      </Row>
    </>
  );
}