import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Api from '../../../api';
import PageContainer from '../../../common/PageContainer';

export default function LoadInitiate() {
  const [fundingSources, setFundingSources] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const navigate = useNavigate();

  const { instance, accounts } = useMsal();

  useEffect(() => {
    new Api(instance, accounts[0])
      .listFundingSources()
      .then((result) => {
        setFundingSources(result ?? []);
        setSelectedAccount(result.find((f) => f.isDefault).id);
      })
      .catch((error) => console.log('error', error));
  }, []);
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
        onChange={(event) => {
          setSelectedAccount(event.target.value);
          const seletedAccount = fundingSources.find((source) => source.id === +event.target.value);
          if (seletedAccount.paymentCard) {
            // eslint-disable-next-line no-alert
            alert('Card choosen, hence validated');
          }
        }}
        value={selectedAccount}
      >
        <option>Select</option>
        {fundingSources?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.displayName
              ?? (item?.bankAccount?.accountNumber ?? item?.paymentCard?.number)}
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
