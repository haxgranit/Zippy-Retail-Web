import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

function AmountInput({
  locale,
  currency,
  decimalPoint,
  amount,
  setAmount,
}: {
  locale: string,
  currency: string,
  decimalPoint: number
  amount: number,
  setAmount: Dispatch<SetStateAction<number>>,
}) {
  const [displayAmount, setDisplayAmount] = useState<string>('');

  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  });
  const symbol = formatter.format(1).replace(/\p{Number}/gu, '')[0];
  const thousandSeparator = formatter.format(11111).replace(/\p{Number}/gu, '')[1];
  const decimalSeparator = formatter.format(1.1).replace(/\p{Number}/gu, '')[1];

  const toCurrency = (number: number): string => formatter.format(number);

  const canBypass = (display: string) => {
    const lastString = display[display.length - 1];
    const dec = display.split(decimalSeparator)[1]?.length || 0;
    return (display === `${symbol}0.0`
      || display === ''
      || lastString === '0'
      || lastString === symbol
      || lastString === symbol
      || lastString === thousandSeparator
      || lastString === decimalSeparator)
      && dec < 2;
  };

  const parseLocaleNumber = (stringNumber: string, noBypass: boolean) => {
    stringNumber = stringNumber === '..' ? '.' : stringNumber;
    stringNumber = stringNumber === '$$' ? '$' : stringNumber;
    if (canBypass(stringNumber) && !noBypass) {
      setDisplayAmount(stringNumber);
    } else {
      if (noBypass && (stringNumber === ','
        || stringNumber === '$,'
        || stringNumber === '.'
        || stringNumber === '$.'
        || stringNumber === '$'
        || stringNumber === '')) {
        stringNumber = '';
      }

      if (stringNumber !== '') {
        stringNumber = stringNumber.includes('.') ? stringNumber.slice(0, (stringNumber.indexOf('.')) + decimalPoint + 1) : stringNumber;
        const parsedAmount = parseFloat(parseFloat(stringNumber
          .replace(new RegExp(`\\${symbol}`), '')
          .replace(new RegExp(`\\${thousandSeparator}`, 'g'), '')
          .replace(new RegExp(`\\${decimalSeparator}`), '.'))
          .toFixed(decimalPoint));
        setAmount(parsedAmount);
        setDisplayAmount(toCurrency(parseFloat(parsedAmount.toFixed(decimalPoint))));
      } else {
        setDisplayAmount('');
      }
    }
  };

  const validate = (event: any) => {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (event.target.value.includes('.')
      && (charCode === 110 || charCode === 190 || charCode === 188)) {
      event.preventDefault();
      return false;
    }

    if (charCode > 31
      && (charCode < 48 || charCode > 57)
      && (charCode < 96 || charCode > 105)
      && (charCode < 37 || charCode > 40)
      && charCode !== 46
      && charCode !== 110
      && charCode !== 188
      && charCode !== 190
    ) {
      event.preventDefault();
      return false;
    }

    return true;
  };

  useEffect(() => {
    if (canBypass(displayAmount)) {
      setDisplayAmount(displayAmount);
    } else {
      setDisplayAmount(toCurrency(amount));
    }
  });

  return (
    <>
      <FormControl
        className="amount"
        placeholder="$0.00"
        value={displayAmount}
        type="string"
        onKeyDown={(evt) => validate(evt)}
        onChange={(evt) => {
          parseLocaleNumber(evt.target.value, false);
        }}
        onBlur={(evt) => {
          parseLocaleNumber(evt.target.value, true);
        }}
      />
    </>
  );
}

AmountInput.propTypes = {
  amount: PropTypes.number,
  locale: PropTypes.string,
  currency: PropTypes.string,
  decimalPoint: PropTypes.number,
};

AmountInput.defaultProps = {
  locale: 'en-CA',
  currency: 'CAD',
  decimalPoint: 2,
  amount: 0,
};

export default AmountInput;
