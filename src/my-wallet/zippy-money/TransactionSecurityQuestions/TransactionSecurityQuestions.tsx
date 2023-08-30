import {
  Button,
  FormControl,
} from 'react-bootstrap';
import { useState } from 'react';
import PageContainer from '../../../common/PageContainer';
import { TransactionInterface } from '../../../constants/interface/TransactionInterface';
import Alert from '../../../common/Alert';

export default function TransactionSecurityQuestions({
  mainInfo,
  setMainInfo,
  handleTriggerTransaction,
  isProcessing,
  errorMessage,
  setErrorMessage,
}: Pick<TransactionInterface, 'mainInfo' | 'setMainInfo' | 'handleTriggerTransaction' | 'isProcessing' | 'errorMessage' | 'setErrorMessage'>) {
  const [confirmAnswer, setConfirmAnswer] = useState<string>('');
  const handleSubmit = () => {
    if (/^\s*$/.test(mainInfo.securityQuestion || '')) {
      setErrorMessage('Please fill in security question.');
      return;
    }

    if (/^\s*$/.test(mainInfo.securityAnswer || '')) {
      setErrorMessage('Please fill in security answer');
      return;
    }

    if (!mainInfo.securityAnswer.match(/^[0-9a-zA-ZÀ-ÿ-]+$/)) {
      setErrorMessage('Security Question Answer can contain letters, digits, hyphens and French characters.');
      return;
    }

    if (mainInfo.securityQuestion.length > 40) {
      setErrorMessage('Security Question cannot be longer than 40 characters.');
      return;
    }

    if (mainInfo.securityAnswer.length < 3 && mainInfo.securityAnswer.length > 25) {
      setErrorMessage('Security Question Answer length must be between 3 and 25 characters.');
      return;
    }

    if (mainInfo.securityAnswer !== confirmAnswer) {
      setErrorMessage('Confirm answer does not match the Security password');
      return;
    }

    setErrorMessage('');
    handleTriggerTransaction();
  };

  return (
    <>
      <PageContainer
        title="Your Wallet"
        subTitle="Made Fun With Zippy!"
        backdropImage="backdrop-image-2"
      >
        <div className="body">
          <div className="title">
            Security Question
          </div>
          <div className="security-question">
            <FormControl
              placeholder="Create a security question (Up to 40 Char.)"
              value={mainInfo.securityQuestion}
              onChange={(evt) => setMainInfo({ ...mainInfo, securityQuestion: evt.target.value })}
              aria-autocomplete="none"
              autoComplete="off"
            />
            <FormControl
              placeholder="Security Answer (No Space)"
              type={mainInfo.showAnswer ? 'text' : 'password'}
              value={mainInfo.securityAnswer}
              onChange={(evt) => setMainInfo({ ...mainInfo, securityAnswer: evt.target.value })}
              aria-autocomplete="none"
              autoComplete="off"
            />
            <FormControl
              placeholder="Re-enter Security Answer"
              type={mainInfo.showAnswer ? 'text' : 'password'}
              value={confirmAnswer}
              onChange={(evt) => setConfirmAnswer(evt.target.value)}
              aria-autocomplete="none"
              autoComplete="off"
            />
          </div>
        </div>
        {errorMessage && (
          <div className="notify-alert">
            <Alert AlertMsg={errorMessage} onClose={() => { setErrorMessage(''); }} />
          </div>
        )}
        <div className="action">
          <Button
            className="zippy-btn"
            onClick={handleSubmit}
            disabled={isProcessing}
          >
            {isProcessing && <div className="loading spinner-border" role="status" />}
            Zipp It
          </Button>
        </div>
      </PageContainer>
    </>
  );
}
