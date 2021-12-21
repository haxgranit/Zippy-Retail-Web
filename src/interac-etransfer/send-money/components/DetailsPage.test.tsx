import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import DetailsPage from './DetailsPage';
import { Form, FormControl } from 'react-bootstrap';

const initMainInfo = {
  amount: 0,
  destination: { email: '', name: '' },
  source: { email: '', name: '' },
  fromAccount: '',
  message: '',
  transferMethod: '',
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
            email: 'email',
            phone: 'phone',
          },
        ]}
        accounts={[
          {
            id: 0,
            name: 'test',
            email: 'eamil',
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
            email: 'email',
            phone: 'phone',
          },
        ]}
        accounts={[
          {
            id: 0,
            name: 'test',
            email: 'eamil',
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
            email: 'email',
            phone: 'phone',
          },
        ]}
        accounts={[
          {
            id: 0,
            name: 'test',
            email: 'eamil',
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
            email: 'email',
            phone: 'phone',
          },
        ]}
        accounts={[
          {
            id: 0,
            name: 'test',
            email: 'eamil',
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
            email: 'email',
            phone: 'phone',
          },
        ]}
        accounts={[
          {
            id: 0,
            name: 'test',
            email: 'eamil',
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
});
