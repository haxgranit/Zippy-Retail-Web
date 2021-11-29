import { Button, Col, Row } from 'react-bootstrap';
import CommonHeader from '../../common/CommonHeader';

export default function RemoveAssociationToOnlineInvestmentAccount() {
  return (
    <>
      <CommonHeader title="Remove Association to Investment Account(s)" print={false} />
      <b>Step: 1 - 2</b>
      <div className="pt-3 pb-3">
        <p>
          If your card is set up to navigate from CIBC Online Banking to your
          CIBC Wealth Management Online Investment Account(s), you can remove
          the association here.
        </p>
        <p>
          By removing the association you will be required to sign on separately
          to CIBC Online Banking and CIBC Wealth Management Online Investment
          sites.
        </p>
        <p>
          For more information about navigation between the CIBC Online Banking
          and CIBC Wealth Management Online Investment sites select the
          Investing tab above.
        </p>
      </div>
      <Row className="pt-3 pb-3" style={{ borderTop: '1px solid #c5c1c1' }}>
        <Col md="12" className="d-flex justify-content-end">
          <Button variant="outline-danger" style={{ marginRight: '10px' }}>Return to Customer Services</Button>
          <Button variant="danger">Remove Association</Button>
        </Col>
      </Row>
    </>
  );
}