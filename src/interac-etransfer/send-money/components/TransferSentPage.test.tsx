import { render, fireEvent } from '../../../test-utils';

import TransferSentPage from './TransferSentPage';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Transfer Sent Page Component', () => {
  it('Click Send another transfer button on Transfer Sent Page', () => {
    const setCurrentStep = jest.fn();
    const setPageIndex = jest.fn();
    const { container } = render(
      <TransferSentPage
        setCurrentStep={setCurrentStep}
        setPageIndex={setPageIndex}
      />,
    );
    fireEvent.click(container.querySelectorAll('.btn-danger')[0]);
    expect(setPageIndex).toBeCalledTimes(1);
    expect(setCurrentStep).toBeCalledTimes(1);
  });

  it('Click Check Status Button on Transfer Sent Page', () => {
    const setCurrentStep = jest.fn();
    const setPageIndex = jest.fn();
    const { container } = render(
      <TransferSentPage
        setCurrentStep={setCurrentStep}
        setPageIndex={setPageIndex}
      />,
    );

    fireEvent.click(container.querySelectorAll('.btn-outline-danger')[0]);
    expect(mockedUsedNavigate).toHaveBeenCalled();
  });
});
