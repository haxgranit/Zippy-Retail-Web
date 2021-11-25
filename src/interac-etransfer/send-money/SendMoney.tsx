import { Col, Row } from 'react-bootstrap';

interface QuickLink {
  id: number;
  url: string;
  text: string;
}

const LinkElement = ({ url, text, id }: QuickLink): JSX.Element => (
  <a href={url} key={id} style={{ textDecoration: 'none', padding: '8px 8px', color: 'black' }}>{text}</a>
);

export default function SendMoney() {
  const quickLinks: QuickLink[] = [
    {
      id: 1,
      text: 'View upcoming bill payments and transfers',
      url: './',
    },
    {
      id: 2,
      text: 'Register for lnterac e-Transfer® Autodeposits',
      url: './',
    },
    {
      id: 3,
      text: 'Change your statement preferences',
      url: './',
    },
  ];
  const result: string = '{Result #0001}';
  return (
    <div>

      <Row style={{ justifyContent: 'space-between', marginTop: '15px', marginBottom: '15px' }}>
        <h3>SEND MONEY</h3>
        <span>
          <i />
          <i />
        </span>
      </Row>
      <Row>
        <Col md={9}>
          <Row
            style={
              {
                border: '2px solid #8E1B4A', borderRadius: '5px', padding: '15px 0px', margin: '0px 2px',
              }
            }
          >
            <Col>
              <Row>
                <i />
                <p>A We&apos;ve encountered an unexpected error. Please try again later. </p>
              </Row>
              <Row style={{ justifyContent: 'flex-end', paddingRight: '15px' }}>

                {result}

              </Row>
            </Col>
          </Row>
          <hr style={{ height: '1px', width: '100%' }} />
          <button
            type="button"
            style={
              {
                width: '30%', alignSelf: 'flex-end', marginLeft: '70%', marginBottom: '10px', marginTop: '15px', borderRadius: '4px', padding: '6px 0px',
              }
            }
          >
            My Account
          </button>
          <hr style={{ height: '1px' }} />
          <Row>
            <i />
            <h6 style={{ fontWeight: 'bold' }}>Note:</h6>
            <p>Your use of lnterac e-Transfer® is subject to the </p>
            <p>
              <i />
              lnterac e-Transferl Terms and conditions (PDF, 197 KB).
            </p>
          </Row>
        </Col>
        <Col md={3}>
          <Row style={{ border: 'solid #AAAAAA 1px', justifyItems: 'space-between', margin: '0px 0px 20px 0px' }}>
            <h6 style={{ paddingTop: '10px' }}>You can also:</h6>
            {quickLinks.map((q) => (LinkElement(q)))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}
