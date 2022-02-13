/* eslint-disable no-nested-ternary */
import { useEffect, useRef, useState } from 'react';
import { FundingSource } from '../../../api';

export default function Options(props: any) {
  const ref = useRef<any>();

  const { defaultTitle, fundingSources, onChange } = props;
  const [expanded, setExpanded] = useState(false);
  // const [checked, setChecked] = useState(false);
  const [selectedSource, setSelectedSource] = useState<FundingSource | undefined>(undefined);
  function optionSelected(option: FundingSource) {
    onChange(option);
    setSelectedSource(option);
    setExpanded(false);
  }

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (expanded && ref.current && !ref.current.contains(e.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [expanded]);

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
          onKeyDown={() => { }}
        >
          {selectedSource?.bankAccount ? selectedSource.bankAccount.accountNumber : defaultTitle}
          {' '}
          <img width={14} height={14} className="margin" src="https://library.kissclipart.com/20180915/yhw/kissclipart-drop-down-arrow-icon-clipart-computer-icons-drop-d-172f248dc7644e4f.png" alt="" />
        </div>
        {expanded && (
          // TODO: need to remove this once we get actual options from api
          <div ref={ref} className="dropdown-content">
            {fundingSources?.map((fundingSource: FundingSource, index: number) => (
              <div
                onClick={() => optionSelected(fundingSource)}
                onKeyDown={() => { }}
                role="button"
                tabIndex={index}
              >
                <div className="d-flex align-item-center justify-content-between text-black mt-3">
                  {' '}
                  <div className="bankName"> Bank Name : HSBC Bank</div>
                  <div>
                    <input type="radio" className="styledRadio" checked={selectedSource?.id === fundingSource.id} />
                  </div>
                </div>
                <div
                  className="d-flex align-item-center justify-content-between accountNo"
                >
                  Acc. Number:
                  {' '}
                  {fundingSource?.bankAccount?.accountNumber}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
