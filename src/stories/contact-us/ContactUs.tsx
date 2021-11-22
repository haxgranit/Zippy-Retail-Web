import React from 'react';
import { useTranslation } from 'react-i18next';
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
  url: string
}

const QuestionElement = ({ url, text } : QuestionLink): JSX.Element => (
  <a href={url} key={url}>{text}</a>
);

export default function ContactUs(): JSX.Element {
  const { t } = useTranslation();
  const FAQs: QuestionLink[] = [{ text: 'question1', url: 'url1' }, { text: 'question1', url: 'url1' }];
  const moreQuestions: QuestionLink[] = [{ text: 'question1', url: 'url1' }, { text: 'question1', url: 'url1' }];
  return (
    <Container>
      <Row>
        <Col md={9}>
          <Row style={{ marginTop: '45px', marginBottom: '25px' }}>
            <h4>{t('contact-us.CONTACT-US')}</h4>
            <p>{t('contact-us.Welcomin-Msg')}</p>
          </Row>
          <Row style={
            {
              justifyContent: 'center', marginTop: '45px', marginBottom: '25px', alignItems: 'center', paddingBottom: '5px',
            }
          }
          >
            <Col md={9} style={{ paddingLeft: '30px', paddingTop: '15px', paddingBottom: '15px' }}>
              <h6>{t('contact-us.Have-Question')}</h6>
              {t('contact-us.Automated-Help')}
            </Col>
            <Col md={3}>
              <Row>
                <Col md={3}>
                  <VerticalDivider />
                </Col>
                <Col md={9} style={{ alignSelf: 'center' }}>
                  <button type="button" style={{ paddingInline: '15px' }}>{t('contact-us.Ask')}</button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: '45px', marginBottom: '25px' }}>
            <Col md={12}>
              <h6>{t('contact-us.ChatWithUs')}</h6>
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
                {t('contact-us.Virtual-Assistant')}
              </Col>
            </Row>
            <Col md={4}>
              <button type="button" style={{ padding: '2px 10px' }}>{t('contact-us.Start-Chatting')}</button>
            </Col>
          </Row>
          <Row style={{ marginTop: '45px', marginBottom: '25px' }}>
            <Col md={12}>
              <h6>{t('contact-us.MeetWithUs')}</h6>
              <hr style={{ marginTop: '0px', height: '3px' }} />
            </Col>
            <p>
              {t('contact-us.Meeting-Schedule')}
            </p>
            <Row md={8} style={{ alignItems: 'center' }}>
              <Col md={5}>
                <button type="button" style={{ padding: '2px 10px' }}>{t('contact-us.Book-Meeting')}</button>
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
                <span style={{ textAlign: 'center' }}>{t('contact-us.Meeting-Review-Cancel')}</span>
              </Col>
            </Row>
          </Row>
          <Row style={{ marginTop: '45px', marginBottom: '25px' }}>
            <Col md={12}>
              <h6>{t('contact-us.Find-Banking')}</h6>
              <hr style={{ marginTop: '0px', height: '3px' }} />
            </Col>
            <Col md={12}>
              <p>{t('contact-us.Banking-Services')}</p>
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
                  {t('contact-us.Banking-Branches')}
                </a>
              </Col>
            </Row>
          </Row>
          <Row style={{ marginTop: '45px', marginBottom: '25px' }}>
            <Col md={12}>
              <h6>{t('contact-us.Call-Number')}</h6>
              <hr style={{ marginTop: '0px', height: '3px' }} />
            </Col>
            <Col md={12}>
              <p>{t('contact-us.Contact-Details-Options')}</p>
            </Col>
            <Col md={5}>
              <Dropdown style={{ border: '2px solid gray' }}>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  {t('contact-us.Select-Category')}
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
            <h6>{t('contact-us.Asked-Questionss')}</h6>
            <h6>{t('contact-us.Online-Banking')}</h6>
            {FAQs.map((q) => (QuestionElement(q)))}
            {moreQuestions.map((q) => (QuestionElement(q)))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
