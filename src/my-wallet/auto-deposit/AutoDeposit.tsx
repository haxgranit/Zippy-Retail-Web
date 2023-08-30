import { Button } from 'react-bootstrap';
import PageContainer from '../../common/PageContainer';

export default function AutoDeposit() {
  return (
    <PageContainer title="Auto Deposit" backdropImage="backdrop-image-3">
      <div className="body">
        <p>
          Auto Deposit is a convenient way to automatically put funds into your Zippy Wallet. Your
          employer, a government agency or other financial institutions can deposit funds directly
          into your Zippy Wallet account for you.
        </p>
        <p>
          To set up a direct deposit complete a direct deposit form and give it to those who make
          regular payments to you.
        </p>
      </div>
      <div className="action">
        <Button className="zippy-btn">Setup Direct Deposit</Button>
      </div>
    </PageContainer>
  );
}
