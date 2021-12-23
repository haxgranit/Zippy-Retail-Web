import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { Button, Form, FormControl } from 'react-bootstrap';
import DetailsPage from './DetailsPage';

const initMainInfo = {
  amount: 0,
  destination: { email: '', name: '' },
  source: { email: '', name: '' },
  fromAccount: '',
  message: '',
  transferMethod: 'Email',
};
// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('DetailsPage Component', () => {
  it('Click next button on DetailsPage', () => {
    const setContactToSend = jest.fn();
    const setPageIndex = jest.fn();
    const wrapper = shallow(
      <DetailsPage
        setCurrentStep={jest.fn()}
        setPageIndex={setPageIndex}
        setMainInfo={jest.fn()}
        mainInfo={initMainInfo}
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
    const mEvent = { preventDefault: jest.fn() };
    wrapper.find('Button[variant="danger"]').simulate('click', mEvent);
    expect(setPageIndex).toBeCalledTimes(1);
  });

  it('Click next button on DetailsPage with option changing', () => {
    const setPageIndex = jest.fn();
    const setContactToSend = jest.fn();
    const wrapper = shallow(
      <DetailsPage
        setCurrentStep={jest.fn()}
        setPageIndex={setPageIndex}
        setMainInfo={jest.fn()}
        mainInfo={initMainInfo}
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
    wrapper
      .find('.send-account-select')
      .simulate('change', { target: { value: 2 } });

    const mEvent = { preventDefault: jest.fn() };
    wrapper.find('Button[variant="danger"]').simulate('click', mEvent);
    expect(setPageIndex).toBeCalledTimes(1);
    expect(setContactToSend).toBeCalledTimes(1);
  });

  it('Click next button on DetailsPage with option 2', () => {
    const setPageIndex = jest.fn();
    const setContactToSend = jest.fn();
    const wrapper = shallow(
      <DetailsPage
        setCurrentStep={jest.fn()}
        setPageIndex={setPageIndex}
        setMainInfo={jest.fn()}
        mainInfo={initMainInfo}
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

    const mEvent = { preventDefault: jest.fn() };
    wrapper.find('Button[variant="danger"]').simulate('click', mEvent);
    expect(setPageIndex).toBeCalledTimes(1);
  });

  it('change FormControl text values', () => {
    const setContactToSend = jest.fn();
    const setMainInfo = jest.fn();
    const wrapper = shallow(
      <DetailsPage
        setCurrentStep={jest.fn()}
        setPageIndex={jest.fn()}
        setMainInfo={setMainInfo}
        mainInfo={initMainInfo}
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
    wrapper
      .find(FormControl)
      .at(0)
      .simulate('change', { target: { value: '3000' } });
    wrapper
      .find(Form.Control)
      .at(0)
      .simulate('change', { target: { value: 'Test Text' } });
    wrapper
      .find('.transfer-method')
      .simulate('change', { target: { value: 'Other' } });

    expect(setMainInfo).toBeCalledTimes(3);
  });

  it('change FormControl to call setContactToSend', () => {
    const setContactToSend = jest.fn();
    const wrapper = shallow(
      <DetailsPage
        setCurrentStep={jest.fn()}
        setPageIndex={jest.fn()}
        setMainInfo={jest.fn()}
        mainInfo={initMainInfo}
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
    wrapper
      .find('.send-account-select')
      .simulate('change', { target: { value: 'Text Message' } });
    expect(setContactToSend).toBeCalledTimes(1);
    wrapper.find('Button').at(1).simulate('click');
  });
  it('next button click should not affect ammount', () => {
    const setContactToSend = jest.fn();
    const wrapper = shallow(
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
    expect(wrapper.find(FormControl).at(0).prop('value')).toEqual(3000);

    wrapper.find(Button).at(1).simulate('click');

    wrapper.update();

    expect(wrapper.find(FormControl).at(0).prop('value')).toEqual(3000);
  });
  it('next button click should not affect transfer method', () => {
    const setContactToSend = jest.fn();
    const wrapper = shallow(
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
    expect(wrapper.find('.transfer-method').text()).toEqual('Email');

    wrapper.find(Button).at(1).simulate('click');

    wrapper.update();

    expect(wrapper.find('.transfer-method').text()).toEqual('Email');
  });
  it('getEmail without contacts should render no email', () => {
    const setContactToSend = jest.fn();
    const setContactId = jest.fn();
    React.useState = jest.fn().mockImplementationOnce(() => [0, setContactId]);

    const wrapper = shallow(
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
    expect(wrapper.find('p').at(0).text()).toEqual('Email: No email');
  });
  it('getEmail with contacts should render an email', () => {
    const setContactToSend = jest.fn();
    const setContactId = jest.fn();
    React.useState = jest.fn().mockImplementationOnce(() => [0, setContactId]);

    const wrapper = shallow(
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
    expect(wrapper.find('p').at(0).text()).toEqual('Email: email@zippy.cash');
  });
});
