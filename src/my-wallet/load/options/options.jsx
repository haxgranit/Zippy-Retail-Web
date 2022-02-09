import { useState } from 'react';

export default function Options({ defaultTitle, fundingSources, onChange }) {
  const [expanded, setExpanded] = useState(false);
  function optionSelected(option) {
    onChange(option);
    setExpanded(false);
  }
  return (
    <>
      <div className="position-relative">
        <div
          className="dropbtn1"
          role="button"
          tabIndex="0"
          onClick={() => setExpanded(!expanded)}
          onKeyDown={() => {}}
        >
          {defaultTitle}
          {' '}
          <img width={30} src="https://dash.com.sg/assets/images/icons/arrow--down--grey.svg" alt="" />
        </div>
        { expanded && (
        <div className="dropdown-content">
          {fundingSources?.map((fundingSource) => (
            fundingSource?.bankAccount ? (
              <>
                <div
                  role="button"
                  tabIndex="0"
                  className="d-flex align-item-center justify-content-between text-black"
                  style={{ borderBottom: '1px solid #CCC', padding: '0.5rem' }}
                  onClick={() => optionSelected(fundingSource)}
                  onKeyDown={() => {}}
                >
                  Account Number:
                  {' '}
                  {fundingSource?.bankAccount?.accountNumber}
                  <div>
                    <input type="radio" />
                  </div>
                </div>
              </>
            )
              : (
                <>
                  <div
                    className="d-flex align-item-center justify-content-between mt-1"
                    role="button"
                    style={{ borderBottom: '1px solid #CCC', padding: '0.5rem' }}
                    tabIndex="0"
                    onClick={() => optionSelected(fundingSource)}
                    onKeyDown={() => {}}
                  >
                    {fundingSource?.paymentCard?.number}
                    <img width={30} src="https://pngimg.com/uploads/visa/visa_PNG24.png" alt="" />
                    <input type="radio" defaultChecked />
                  </div>
                </>
              )
          ))}
        </div>
        )}
      </div>
    </>
  );
}
