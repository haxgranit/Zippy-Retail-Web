import { render } from '@testing-library/react';
import { ModalContent } from './SendMoneyVerificationModal';
import { isValidEmail } from '../helpers/Validators';

describe('SendMoneyVerificationModal Component', () => {
  it('should have valid informations', () => {
    const { container } = render(
      <ModalContent
        transferDetails={{
          source: { name: 'source', email: 'source@zippy.cash' },
          destination: { firstName: 'firstName', lastName: 'lastName', email: 'destination@zippy.cash' },
          fromAccount: 'Personal (8000 001 000000000) $1,747.46',
          amount: 10000,
        }}
        isSendingMoney={false}
        handleBack={jest.fn()}
        handleClose={jest.fn()}
        handleNext={jest.fn()}
        show
      />,
    );
    const labels = container.querySelectorAll('p');
    expect(labels[3].innerHTML).toEqual('source');
    expect(labels[4].innerHTML).toEqual('source@zippy.cash');
    expect(labels[6].innerHTML).toEqual('firstName lastName');
    expect(labels[7].innerHTML).toEqual('destination@zippy.cash');
    expect(labels[9].innerHTML).toEqual('$10,000.00');
    expect(labels[11].innerHTML).toEqual('Personal (8000 001 000000000) $1,747.46');
    expect(isValidEmail(labels[4].innerHTML)).toBeTruthy();
    expect(isValidEmail(labels[7].innerHTML)).toBeTruthy();
  });
});
