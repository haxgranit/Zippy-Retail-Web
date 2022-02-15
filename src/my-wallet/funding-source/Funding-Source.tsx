import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../common/PageContainer';

export default function FundingSource() {
  const navigate = useNavigate();

  return (
    <PageContainer title="Your Wallet" subTitle="Made Fun With Zippy!" backdropImage="background-funding-image">
      <div className="fundingTitle">
        Funding Source
      </div>

      <div>
        <div className="bankWrapper">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <i className="zippy-cash-icon zc-bank" />
            {' '}
            <p className="bankTitle">Registered Banks</p>
          </div>
          <div
            onKeyDown={() => { }}
            role="button"
            tabIndex={0}
            onClick={() => navigate('/my-wallet/funding-source/add-bank-account')}
            className="addBtn"
          >
            +Add

          </div>
        </div>

        <div className="bankDetails">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <input type="radio" />
            <div style={{ marginLeft: 11 }}>
              <p className="bankName">Bank Name: HSBC Bank</p>
              <p className="accNo">Acc. Number: XXXX XXXX 5555</p>
            </div>
          </div>
          <div className="editWrap">
            <i className="zippy-cash-icon zc-cross" />
            <p className="editBtn">Edit</p>
          </div>
        </div>
      </div>

      <div className="action">
        <Button
          className="zippy-btn"
        >
          Send money
        </Button>
      </div>
    </PageContainer>
  );
}
