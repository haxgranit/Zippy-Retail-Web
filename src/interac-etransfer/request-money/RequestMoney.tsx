import { useState, useEffect } from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import CommonHeader from '../../common/CommonHeader';
import StepComponent from '../../common/StepComponent';
import RequestDetail from './components/RequestDetails';
import RequestSent from './components/RequestSent';

const Divider = () => <div className="border-top my-3" />;

const LeftCol = ({ currentStep, setCurrentStep, navigateStep }: any) => (
  <Col xs={9}>
    <Row>
      <Col>
        <StepComponent
          steps={2}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          navigateSteps={navigateStep}
        />
      </Col>
    </Row>
    {currentStep === 1 && (
      <RequestDetail
        setCurrentStep={setCurrentStep}
        navigateStep={navigateStep}
      />
    )}
    {currentStep === 2 && (
      <RequestSent
        setCurrentStep={setCurrentStep}
        navigateStep={navigateStep}
      />
    )}
    <Divider />
    <Row>
      <Col>
        <b>Note:</b>
        <br />
        Your use of
        {' '}
        <i>Interac</i>
        {' '}
        e-Transfer is subject to the
        {' '}
        <i>Interac</i>
        {' '}
        e-Transfer Terms and conditions (PDF, 197 KB).
      </Col>
    </Row>
  </Col>
);

const RightCol = () => (
  <Col xs={3}>
    <div className="border p-2 rounded">
      <b>You can also:</b>
      <br />
      View upcoming bill payments and transfers &gt;
      <br />
      Stop a payment &gt;
      <br />
      Change your statement preferences &gt;
    </div>
  </Col>
);

const StepIndexes: any = {
  'request-detail': 1,
  'request-sent': 2,
};

const Steps = ['request-details', 'request-sent'];

export default function RequestMoney() {
  const { stepId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(StepIndexes[stepId || 'request-detail']);

  const navigateStep = (stepIndex: number) => {
    navigate(`/interac-etransfer/request-money/${Steps[stepIndex]}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);
  return (
    <div>
      <Row>
        <Col>
          <CommonHeader title="REQUEST MONEY" print={false} />
        </Col>
      </Row>
      <Row>
        <LeftCol
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          navigateStep={navigateStep}
        />
        <RightCol />
      </Row>
    </div>
  );
}
