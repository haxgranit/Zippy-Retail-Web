import { Button } from 'react-bootstrap';
import PageContainer from '../../../common/PageContainer';

export default function AddBankAccount() {
  return (
    <PageContainer title="Your Wallet" subTitle="Made Fun With Zippy!" backdropImage="background-funding-image">
      <div className="fundingTitle">
        Funding Source
      </div>

      <div className="bankForm">
        <form action="">
          <input type="text" placeholder="Bank Name" />

          <input type="text" placeholder="Account Name" />

          <input type="number" placeholder="Account Name" />

          <input type="number" placeholder="Institution Number" />

          <input type="number" placeholder="Transit Number" />

          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <input type="radio" style={{ marginRight: 13 }} />
            <p style={{ margin: 0 }}>Mark this Account as a default</p>
          </div>
        </form>

      </div>

      <div className="action">
        <Button
          className="zippy-btn"
        >
          Save
        </Button>
      </div>
    </PageContainer>
  );
}
