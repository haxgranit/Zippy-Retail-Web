import { render, fireEvent } from '../../../test-utils';

import DetailsPage from './DetailsPage';

describe('DetailsPage Component', () => {
  it('Click next button on DetailsPage', () => {
    const setPageIndex = jest.fn();
    const { container } = render(
      <DetailsPage setCurrentStep={jest.fn()} setPageIndex={setPageIndex} />,
    );
    fireEvent.click(container.querySelectorAll('button.btn-danger')[0]);
  });

  it('Click next button on DetailsPage with option changing', () => {
    const setPageIndex = jest.fn();
    const setContactToSend = jest.fn();
    const { container } = render(
      <DetailsPage
        setCurrentStep={jest.fn()}
        setPageIndex={setPageIndex}
        setContactToSend={setContactToSend}
      />,
    );
    fireEvent.change(container.querySelectorAll('.send-account-select')[0], { target: { value: 2 } });

    fireEvent.click(container.querySelectorAll('button.btn-danger')[0]);
    expect(setContactToSend).toBeCalledTimes(1);
  });

  it('Click next button on DetailsPage with option 2', () => {
    const setPageIndex = jest.fn();
    const setContactToSend = jest.fn();
    const { container } = render(
      <DetailsPage
        setCurrentStep={jest.fn()}
        setPageIndex={setPageIndex}
        setContactToSend={setContactToSend}
        selectedContact={2}
        mainInfo={{
          from: 'Business (7000 001 000000000)',
        }}
      />,
    );

    fireEvent.click(container.querySelectorAll('button.btn-danger')[0]);
  });

  it('change FormControl text values', () => {
    const setPageIndex = jest.fn();
    const setMainInfo = jest.fn();
    const { container } = render(
      <DetailsPage
        setCurrentStep={jest.fn()}
        setPageIndex={setPageIndex}
        setMainInfo={setMainInfo}
        mainInfo={{}}
      />,
    );

    fireEvent.change(container.querySelectorAll('.form-control')[0], { target: { value: 'Test Text' } });
    fireEvent.change(container.querySelectorAll('.form-control')[1], { target: { value: 'Test Text' } });
    fireEvent.change(container.querySelectorAll('.from-account-info')[0], { target: { value: 'Business (7000 001 000000000)' } });
    fireEvent.change(container.querySelectorAll('.transfer-method')[0], { target: { value: 'Text Message' } });
    expect(setMainInfo).toBeCalledTimes(4);
  });

  it('change FormControl to call setContactToSend', () => {
    const setContactToSend = jest.fn();
    const { container } = render(
      <DetailsPage
        setCurrentStep={jest.fn()}
        setPageIndex={jest.fn()}
        setMainInfo={jest.fn()}
        mainInfo={{
          from: 'Business (7000 001 000000000)',
        }}
        setContactToSend={setContactToSend}
        contacts={[{
          id: 1,
          firstName: 'Test',
          lastName: 'Test',
        }]}
        accounts={[{
          name: 'test',
        }]}
        selectedContact={1}
      />,
    );
    fireEvent.change(container.querySelectorAll('.send-account-select')[0], { target: { value: 'Text Message' } });
    expect(setContactToSend).toBeCalledTimes(1);
    fireEvent.click(container.querySelectorAll('.btn-danger')[0]);
  });
});
