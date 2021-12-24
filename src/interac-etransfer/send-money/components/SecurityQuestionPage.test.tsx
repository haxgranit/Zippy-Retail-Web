import { render, fireEvent } from '../../../test-utils';

import SecurityQuestionPage from './SecurityQuestionPage';

describe('Security Question Page Component', () => {
  it('Click next button on Security Question Page', () => {
    const showModal = jest.fn();
    const { container } = render(
      <SecurityQuestionPage showModal={showModal} />,
    );
    fireEvent.click(container.querySelectorAll('.btn-danger')[0]);
    expect(showModal).toBeCalledTimes(1);
  });

  it('Click back button on Security Question Page', () => {
    const setPageIndex = jest.fn();
    const { container } = render(
      <SecurityQuestionPage
        setPageIndex={setPageIndex}
        setCurrentStep={jest.fn()}
      />,
    );
    fireEvent.click(container.querySelectorAll('.btn-outline-danger')[0]);
    expect(setPageIndex).toBeCalledTimes(1);
  });

  it('change FormControl text values', () => {
    const setPageIndex = jest.fn();
    const setMainInfo = jest.fn();
    const { container } = render(
      <SecurityQuestionPage
        setPageIndex={setPageIndex}
        setMainInfo={setMainInfo}
        mainInfo={{}}
      />,
    );
    fireEvent.change(container.querySelectorAll('.form-control')[0], {
      target: { value: 'Test Text' },
    });
    fireEvent.change(container.querySelectorAll('.form-control')[1], {
      target: { value: 'Test Text' },
    });
    fireEvent.change(container.querySelectorAll('.form-control')[2], {
      target: { value: 'Test Text' },
    });
    fireEvent.change(
      container.querySelectorAll('.is-show-answer .form-check-input')[0],
      { target: { value: true } },
    );
    expect(setMainInfo).toBeCalledTimes(3);

    fireEvent.click(container.querySelectorAll('.btn-light')[0]);
    expect(setPageIndex).toBeCalledTimes(1);
  });
});
