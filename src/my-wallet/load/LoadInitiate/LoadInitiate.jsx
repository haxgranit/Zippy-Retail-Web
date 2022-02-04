import { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../../common/PageContainer';

export default function LoadInitiate() {
  const dummyAccounts = ['ABC bank', 'XYZ CC'];
  const [selectedAccount, setSelectedAccount] = useState(dummyAccounts[0]);
  const navigate = useNavigate();
  return (
    <PageContainer title="Personal Banking" subTitle="Made Fun With Zippy!">
      <div className="title">
        Load wallet
      </div>

      <FormControl
        className="amount"
        placeholder="0.00"
        type="number"
        step=".01"
      />
      <Form.Select
        className="send-account-select"
        onChange={(event) => setSelectedAccount(event.target.value)}
        value={selectedAccount}
      >
        <option>Select</option>
        {dummyAccounts?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Form.Select>
      <div className="action">
        <Button
          className="zippy-btn"
          onClick={() => navigate('/my-wallet/load/status')}
        >
          Load
        </Button>
      </div>
    </PageContainer>
  );
}
