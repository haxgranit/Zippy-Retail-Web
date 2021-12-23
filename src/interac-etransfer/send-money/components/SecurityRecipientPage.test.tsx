import { render, fireEvent } from '../../../test-utils';

import SecurityRecipientPage from './SecurityRecipientPage';

describe('Security Recipient Page Component', () => {
  it('Click next button on Security Recipient Page', () => {
    const showModal = jest.fn();
    const { container } = render(<SecurityRecipientPage showModal={showModal} />);
    
    fireEvent.click(container.querySelectorAll('.btn-danger')[0]);
    expect(showModal).toBeCalledTimes(1);
  });

  it('Click back button on Security Recipient Page', () => {
    const setPageIndex = jest.fn();
    const { container } = render(
      <SecurityRecipientPage
        setPageIndex={setPageIndex}
        setCurrentStep={jest.fn()}
      />,
    );
    fireEvent.click(container.querySelectorAll('.btn-outline-danger')[0]);
    expect(setPageIndex).toBeCalledTimes(1);
  });
});
