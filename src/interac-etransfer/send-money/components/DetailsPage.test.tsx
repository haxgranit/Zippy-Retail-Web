import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DetailsPage from './DetailsPage';

const initMainInfo = {
  amount: 0,
  destination: { email: '', name: '' },
  source: { email: '', name: '' },
  fromAccount: '',
  message: '',
  transferMethod: 'Email',
};

describe('DetailsPage Component', () => {
  it('Click next button on DetailsPage', () => {
    const setContactToSend = jest.fn();
    const setPageIndex = jest.fn();
    const { getByText } = render(
      <DetailsPage
        setCurrentStep={jest.fn()}
        setPageIndex={setPageIndex}
        setMainInfo={jest.fn()}
        mainInfo={initMainInfo}
        setContactToSend={setContactToSend}
        setSelectedAccount={jest.fn()}
        selectedAccount={1}
        contacts={[
          {
            id: 1,
            firstName: 'Test',
            lastName: 'Test',
            email: 'email@zippy.cash',
            phone: 'phone',
          },
        ]}
        accounts={[
          {
            id: 0,
            name: 'test',
            email: 'email@zippy.cash',
          },
        ]}
        selectedContact={1}
      />,
    );
    const mEvent = { preventDefault: jest.fn() };
    fireEvent.click(getByText('Next'), mEvent);
    expect(setPageIndex).toBeCalledTimes(1);
  });

  it('Click next button on DetailsPage with option changing', () => {
    const setPageIndex = jest.fn();
    const setContactToSend = jest.fn();
    const { container, getByText } = render(
      <DetailsPage
        setCurrentStep={jest.fn()}
        setPageIndex={setPageIndex}
        setMainInfo={jest.fn()}
        mainInfo={initMainInfo}
        setContactToSend={setContactToSend}
        setSelectedAccount={jest.fn()}
        selectedAccount={1}
        selectedContact={1}
        contacts={[
          {
            id: 1,
            firstName: 'Test',
            lastName: 'Test',
            email: 'email@zippy.cash',
            phone: 'phone',
          },
        ]}
        accounts={[
          {
            id: 0,
            name: 'test',
            email: 'email@zippy.cash',
          },
        ]}
      />,
    );
    fireEvent.change(container.querySelectorAll('.send-account-select')[0], { target: { value: 2 } });

    const mEvent = { preventDefault: jest.fn() };
    fireEvent.click(getByText('Next'), mEvent);
    expect(setPageIndex).toBeCalledTimes(1);
    expect(setContactToSend).toBeCalledTimes(1);
  });

  it('Click next button on DetailsPage with option 2', () => {
    const setPageIndex = jest.fn();
    const setContactToSend = jest.fn();
    const { getByText } = render(
      <DetailsPage
        setCurrentStep={jest.fn()}
        setPageIndex={setPageIndex}
        setMainInfo={jest.fn()}
        mainInfo={initMainInfo}
        setContactToSend={setContactToSend}
        setSelectedAccount={jest.fn()}
        selectedAccount={2}
        selectedContact={1}
        contacts={[
          {
            id: 1,
            firstName: 'Test',
            lastName: 'Test',
            email: 'email@zippy.cash',
            phone: 'phone',
          },
        ]}
        accounts={[
          {
            id: 0,
            name: 'test',
            email: 'email@zippy.cash',
          },
        ]}
      />,
    );

    const mEvent = { preventDefault: jest.fn() };
    fireEvent.click(getByText('Next'), mEvent);
    expect(setPageIndex).toBeCalledTimes(1);
  });

  it('change FormControl text values', () => {
    const setPageIndex = jest.fn();
    const setMainInfo = jest.fn();
    const { container } = render(
      <DetailsPage
        setCurrentStep={jest.fn()}
        setPageIndex={setPageIndex}
        setMainInfo={setMainInfo}
        mainInfo={initMainInfo}
        setContactToSend={jest.fn()}
        setSelectedAccount={jest.fn()}
        selectedAccount={0}
        selectedContact={1}
        contacts={[
          {
            id: 1,
            firstName: 'Test',
            lastName: 'Test',
            email: 'email@zippy.cash',
            phone: 'phone',
          },
        ]}
        accounts={[
          {
            id: 0,
            name: 'test',
            email: 'email@zippy.cash',
          },
        ]}
      />,
    );

    fireEvent.change(container.querySelectorAll('.form-control')[0], { target: { value: 'Test Text' } });
    fireEvent.change(container.querySelectorAll('.form-control')[1], { target: { value: 'Test Text' } });
    fireEvent.change(container.querySelectorAll('.from-account-info')[0], { target: { value: 'Test Text' } });
    fireEvent.change(container.querySelectorAll('.transfer-method')[0], { target: { value: 'Text Message' } });

    expect(setMainInfo).toBeCalledTimes(3);
  });

  it('change FormControl to call setContactToSend', () => {
    const setContactToSend = jest.fn();
    const { container } = render(
      <DetailsPage
        setCurrentStep={jest.fn()}
        setPageIndex={jest.fn()}
        setMainInfo={jest.fn()}
        mainInfo={initMainInfo}
        setContactToSend={setContactToSend}
        setSelectedAccount={jest.fn()}
        selectedAccount={0}
        selectedContact={1}
        contacts={[
          {
            id: 1,
            firstName: 'Test',
            lastName: 'Test',
            email: 'email@zippy.cash',
            phone: 'phone',
          },
        ]}
        accounts={[
          {
            id: 0,
            name: 'test',
            email: 'email@zippy.cash',
          },
        ]}
      />,
    );

    fireEvent.change(container.querySelectorAll('.send-account-select')[0], { target: { value: 'Text Message' } });
    expect(setContactToSend).toBeCalledTimes(1);
    fireEvent.click(container.querySelectorAll('.btn')[1]);
  });
  it('next button click should not affect ammount', () => {
    const setContactToSend = jest.fn();
    const { container } = render(
      <DetailsPage
        setCurrentStep={jest.fn()}
        setPageIndex={jest.fn()}
        setMainInfo={jest.fn()}
        mainInfo={{ ...initMainInfo, amount: 3000 }}
        setContactToSend={setContactToSend}
        setSelectedAccount={jest.fn()}
        selectedAccount={0}
        contacts={[
          {
            id: 1,
            firstName: 'Test',
            lastName: 'Test',
            email: 'email@zippy.cash',
            phone: 'phone',
          },
        ]}
        accounts={[
          {
            id: 0,
            name: 'test',
            email: 'email@zippy.cash',
          },
        ]}
        selectedContact={1}
      />,
    );

    fireEvent.click(container.querySelectorAll('.btn')[1]);
  });
  it('next button click should not affect transfer method', () => {
    const setContactToSend = jest.fn();
    const { container } = render(
      <DetailsPage
        setCurrentStep={jest.fn()}
        setPageIndex={jest.fn()}
        setMainInfo={jest.fn()}
        mainInfo={{ ...initMainInfo, amount: 3000 }}
        setContactToSend={setContactToSend}
        setSelectedAccount={jest.fn()}
        selectedAccount={0}
        contacts={[
          {
            id: 1,
            firstName: 'Test',
            lastName: 'Test',
            email: 'email@zippy.cash',
            phone: 'phone',
          },
        ]}
        accounts={[
          {
            id: 0,
            name: 'test',
            email: 'email@zippy.cash',
          },
        ]}
        selectedContact={1}
      />,
    );
    expect(container.querySelectorAll('.transfer-method option')[0].innerHTML).toEqual('Email');
    fireEvent.click(container.querySelectorAll('.btn')[1]);

    expect(container.querySelectorAll('.transfer-method option')[0].innerHTML).toEqual('Email');
  });
  it('getEmail without contacts should render no email', () => {
    const setContactToSend = jest.fn();
    const setContactId = jest.fn();
    React.useState = jest.fn().mockImplementationOnce(() => [0, setContactId]);

    const { container } = render(
      <DetailsPage
        setCurrentStep={jest.fn()}
        setPageIndex={jest.fn()}
        setMainInfo={jest.fn()}
        mainInfo={{ ...initMainInfo, amount: 3000 }}
        setContactToSend={setContactToSend}
        setSelectedAccount={jest.fn()}
        selectedAccount={1}
        contacts={[]}
        accounts={[
          {
            id: 0,
            name: 'test',
            email: 'email@zippy.cash',
          },
        ]}
        selectedContact={1}
      />,
    );
    expect(container.querySelectorAll('p')[0].innerHTML).toEqual('Email: No email');
  });
  it('getEmail with contacts should render an email', () => {
    const setContactToSend = jest.fn();
    const setContactId = jest.fn();
    React.useState = jest.fn().mockImplementationOnce(() => [0, setContactId]);

    const { container } = render(
      <DetailsPage
        setCurrentStep={jest.fn()}
        setPageIndex={jest.fn()}
        setMainInfo={jest.fn()}
        mainInfo={{ ...initMainInfo, amount: 3000 }}
        setContactToSend={setContactToSend}
        setSelectedAccount={jest.fn()}
        selectedAccount={1}
        contacts={[
          {
            id: 1,
            firstName: 'Test',
            lastName: 'Test',
            email: 'email@zippy.cash',
            phone: 'phone',
          },
        ]}
        accounts={[
          {
            id: 0,
            name: 'test',
            email: 'email@zippy.cash',
          },
        ]}
        selectedContact={1}
      />,
    );
    expect(container.querySelectorAll('p')[0].innerHTML).toEqual('Email: email@zippy.cash');
  });
});
