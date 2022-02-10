/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import { FundingSource } from '../../../api';

export default function Options(props: any) {
  const { defaultTitle, fundingSources, onChange } = props;
  const [expanded, setExpanded] = useState(false);
  const [selectedSource, setSelectedSource] = useState<FundingSource | undefined>(undefined);
  function optionSelected(option:FundingSource) {
    onChange(option);
    setSelectedSource(option);
    setExpanded(false);
  }
  return (
    <>
      <div
        className="dropdown_background"
      >
        <div
          className="dropbtn1"
          role="button"
          tabIndex={0}
          onClick={() => setExpanded(!expanded)}
          onKeyDown={() => {}}
        >
          {selectedSource
            ? (selectedSource.bankAccount
              ? selectedSource.bankAccount.accountNumber : selectedSource.paymentCard?.number)
            : defaultTitle}
          {' '}
          <img width={14} height={14} className="margin" src="https://library.kissclipart.com/20180915/yhw/kissclipart-drop-down-arrow-icon-clipart-computer-icons-drop-d-172f248dc7644e4f.png" alt="" />
        </div>
        { expanded && (
        <div className="dropdown-content">
          {fundingSources?.map((fundingSource: FundingSource, index: number) => (
            fundingSource?.bankAccount ? (
              <div
                onClick={() => optionSelected(fundingSource)}
                onKeyDown={() => {}}
                role="button"
                tabIndex={index}
              >
                <div className="d-flex align-item-center justify-content-between text-black mt-3">
                  {' '}
                  <div style={{ paddingLeft: '10px' }}> Bank Name : HSBC Bank</div>
                  <div>
                    <input type="radio" />
                  </div>
                </div>
                <div
                  className="d-flex align-item-center justify-content-between text-black"
                  style={{ borderBottom: '1px solid #CCC', padding: '0.5rem' }}

                >
                  Acc. Number:
                  {' '}
                  {fundingSource?.bankAccount?.accountNumber}
                </div>
              </div>
            )
              : (
                <div
                  role="button"
                  tabIndex={index}
                  onClick={() => optionSelected(fundingSource)}
                  onKeyDown={() => {}}
                >
                  <div style={{ padding: '0.5em' }}>
                    <div
                      className="d-flex align-item-center justify-content-between"

                    >
                      {fundingSource?.paymentCard?.number}
                      <p>5789</p>
                      <img width={30} height={30} src="https://pngimg.com/uploads/visa/visa_PNG24.png" alt="" />
                      <input type="radio" defaultChecked />
                    </div>
                    <div style={{ borderBottom: '1px solid #CCC', marginTop: '-0.4em' }}>
                      <b>Personal</b>
                      {' '}
                      - Debit Card
                    </div>
                  </div>
                </div>
              )
          ))}
        </div>
        )}
      </div>
    </>
  );
}
