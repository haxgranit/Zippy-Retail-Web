import styled from 'styled-components';
import {
  Col, Container, Dropdown, Row,
} from 'react-bootstrap';

const VerticalDivider = styled.div`
border-left: 1px solid #AAAAAA;
height: 50px;
position:relative;
margin:1rem;
`;

interface QuestionLink {
  text: string;
  url: string;
  id: number;
}

const QuestionElement = ({ url, text, id }: QuestionLink): JSX.Element => (
  <a href={url} key={id}>{text}</a>
);

export default function ContactUs(): JSX.Element {
  const FAQs: QuestionLink[] = [{ text: 'question1', url: 'url1', id: 1 }, { text: 'question1', url: 'url1', id: 2 }];
  const moreQuestions: QuestionLink[] = [{ text: 'question1', url: 'url1', id: 3 }, { text: 'question1', url: 'url1', id: 4 }];
  return (
    <Container>
      <Row>
        <Col md={9}>
          <Row style={{ marginTop: '45px', marginBottom: '25px' }}>
            <h4>CONTACT US</h4>
            <p>
              We welcome your comments and suggestions.Contact us in a way thats convenient for you
            </p>
          </Row>
          <Row style={
            {
              justifyContent: 'center', marginTop: '45px', marginBottom: '25px', alignItems: 'center', paddingBottom: '5px',
            }
          }
          >
            <Col md={9} style={{ paddingLeft: '30px', paddingTop: '15px', paddingBottom: '15px' }}>
              <h6>Have a question?</h6>
              Use our automated help for immediate answers to your questions.
            </Col>
            <Col md={3}>
              <Row>
                <Col md={3}>
                  <VerticalDivider />
                </Col>
                <Col md={9} style={{ alignSelf: 'center' }}>
                  <button type="button" style={{ paddingInline: '15px' }}>Ask</button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: '45px', marginBottom: '25px' }}>
            <Col md={12}>
              <h6>Chat with us</h6>
              <hr style={{ marginTop: '0px', height: '3px' }} />
            </Col>
            <Row style={{ paddingBottom: '20px' }}>
              <Col md={2}>
                <div style={
                  {
                    border: 'dashed 2px grey', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '5px', height: '50px', width: '50px', textAlign: 'center',
                  }
                }
                >
                  icon
                </div>
              </Col>
              <Col md={10}>
                CIBC&apos;s Virtual Assistant is available 24/7 to answer your questions
                about everyday banking and is able to perfom banking transactions
                on your behalf.
              </Col>
            </Row>
            <Col md={4}>
              <button type="button" style={{ padding: '2px 10px' }}>Start chatting</button>
            </Col>
          </Row>
          <Row style={{ marginTop: '45px', marginBottom: '25px' }}>
            <Col md={12}>
              <h6>Meet with us</h6>
              <hr style={{ marginTop: '0px', height: '3px' }} />
            </Col>
            <p>
              Schedule your meeting online - find the time and place that work for you
            </p>
            <Row md={8} style={{ alignItems: 'center' }}>
              <Col md={5}>
                <button type="button" style={{ padding: '2px 10px' }}>Book a meeting</button>
              </Col>
              <Col md={2}>
                <div style={
                  {
                    border: 'dashed 2px grey', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '5px', height: '50px', width: '50px', textAlign: 'center',
                  }
                }
                >
                  icon
                </div>
              </Col>
              <Col md={5}>
                <span style={{ textAlign: 'center' }}>Review/Cancel a meeting</span>
              </Col>
            </Row>
          </Row>
          <Row style={{ marginTop: '45px', marginBottom: '25px' }}>
            <Col md={12}>
              <h6>Find a banking center or ATM</h6>
              <hr style={{ marginTop: '0px', height: '3px' }} />
            </Col>
            <Col md={12}>
              <p>
                More than 1,100 CIBC banking Centres and 3,500 bank machines across Canada
                offer the banking services you need
              </p>
            </Col>
            <Row md={8} style={{ justifyItems: 'center', alignItems: 'center', paddingTop: '10px' }}>
              <Col md={2}>
                <div style={
                  {
                    border: 'dashed 2px grey', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '5px', height: '50px', width: '50px', textAlign: 'center',
                  }
                }
                >
                  icon
                </div>
              </Col>
              <Col>
                <i />
                <a href="./" style={{ color: 'black' }}>
                  Find a branch or ATM
                </a>
              </Col>
            </Row>
          </Row>
          <Row style={{ marginTop: '45px', marginBottom: '25px' }}>
            <Col md={12}>
              <h6>Find the right number to call</h6>
              <hr style={{ marginTop: '0px', height: '3px' }} />
            </Col>
            <Col md={12}>
              <p>Select an option to view the contact details</p>
            </Col>
            <Col md={5}>
              <Dropdown style={{ border: '2px solid gray' }}>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Select an category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <div style={{ border: 'solid #AAAAAA 1px' }}>
            <h6>Frequently Asked Questions</h6>
            <h6>Online Banking</h6>
            {FAQs.map((q) => (QuestionElement(q)))}
            {moreQuestions.map((q) => (QuestionElement(q)))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
