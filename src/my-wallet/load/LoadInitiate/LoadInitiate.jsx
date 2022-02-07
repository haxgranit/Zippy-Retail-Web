/* eslint-disable react/jsx-props-no-spreading */
import { useMsal } from '@azure/msal-react';
import Select, { components } from 'react-select';
import { useEffect, useState } from 'react';
import { Button, FormControl, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Api from '../../../api';
import PageContainer from '../../../common/PageContainer';

export default function LoadInitiate() {
  const [fundingSources, setFundingSources] = useState([]);
  const [amount, setAmoumt] = useState(0);
  const [cardExpired, setCardExpired] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(undefined);
  const navigate = useNavigate();

  const { instance, accounts } = useMsal();

  useEffect(() => {
    new Api(instance, accounts[0])
      .listFundingSources()
      .then((result) => {
        const options = result.map((s) => ({
          value: s.id,
          ...s,
          label: s.displayName
            ?? (s?.bankAccount?.accountNumber ?? s?.paymentCard?.number),
        }));
        setFundingSources(options ?? []);
        setSelectedAccount(options[options.findIndex((f) => f.isDefault)]);
      })
      .catch((error) => console.log('error', error));
  }, []);

  const [loadTried, setLoadTried] = useState(false);
  function loadFunds() {
    setLoadTried(true);

    if (!(amount > 0)) {
      return;
    }

    if (selectedAccount?.paymentCard) {
      setCardExpired(true);
      return;
    }
    const fundRequest = {
      amount,
      sourceId: selectedAccount,
    };
    new Api(instance, accounts[0])
      .postFundLoadRequest(fundRequest)
      .then(() => {
        navigate('/my-wallet/load/status', {
          state: fundRequest,
        });
      })
      .catch((error) => console.log('error', error));
  }

  const CustomOption = (props) => {
    const { data, isSelected } = props;

    if (data.bankAccount) {
      return (
        <components.Option {...props}>
          <>
            <div className="d-flex">
              <div>
                <div>
                  Bank Name: ABC Bank
                </div>
                <div>
                  Account Number:
                  {' '}
                  {data.bankAccount.accountNumber}
                </div>
              </div>
              <input className="align-self-center m-2 justify-self-end" type="radio" defaultChecked={isSelected} />
            </div>
          </>
        </components.Option>
      );
    }
    return (
      <components.Option {...props}>
        <div>
          <span>{data.paymentCard.number}</span>
        </div>
      </components.Option>
    );
  };

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
        defaultValue={amount}
        onChange={(event) => { setAmoumt(event.target.value); }}
      />
      {loadTried && !(amount > 0)
        && (
          <span style={{ color: 'red' }}>
            {' '}
            *Amount Must Be Greater Than Zero
          </span>
        )}
      <Select
        options={fundingSources}
        components={{
          Option: CustomOption,
        }}
        onChange={(option) => {
          setSelectedAccount(option);
          const seletedAccount = fundingSources.find(
            (source) => source.id === +option.value,
          );
          if (seletedAccount.paymentCard) {
            // eslint-disable-next-line no-alert
            alert('Card choosen, hence validated');
          }
        }}
        defaultValue={selectedAccount}
      />
      <div className="action">
        <Button
          className="zippy-btn"
          onClick={() => {
            loadFunds();
          }}
        >
          Load
        </Button>
      </div>
      <Modal show={cardExpired} onHide={() => setCardExpired(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>This Card is expired!</Modal.Body>
        <Modal.Footer>
          <Button
            className="zippy-btn"
            variant="secondary"
            onClick={() => setCardExpired(false)}
          >
            Remove Card
          </Button>
        </Modal.Footer>
      </Modal>
    </PageContainer>
  );
}
