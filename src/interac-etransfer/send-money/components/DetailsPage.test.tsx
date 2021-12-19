import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import DetailsPage from './DetailsPage';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('DetailsPage Component', () => {
  it('Click next button on DetailsPage', () => {
    const setPageIndex = jest.fn();
    const wrapper = shallow(
      <DetailsPage setCurrentStep={jest.fn()} setPageIndex={setPageIndex} />,
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
        setContactToSend={setContactToSend}
      />,
    );
    wrapper.find('.send-account-select').simulate('change', { target: { value: 2 } });

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
        setContactToSend={setContactToSend}
        selectedContact={2}
      />,
    );

    const mEvent = { preventDefault: jest.fn() };
    wrapper.find('Button[variant="danger"]').simulate('click', mEvent);
    expect(setPageIndex).toBeCalledTimes(1);
  });

  it('change FormControl text values', () => {
    const setPageIndex = jest.fn();
    const setMainInfo = jest.fn();
    const wrapper = shallow(
      <DetailsPage
        setCurrentStep={jest.fn()}
        setPageIndex={setPageIndex}
        setMainInfo={setMainInfo}
        mainInfo={{}}
      />,
    );
    wrapper.find('FormControl').at(0).simulate('change', { target: { value: 'Test Text' } });
    wrapper.find('FormControl').at(1).simulate('change', { target: { value: 'Test Text' } });
    wrapper.find('.from-account-info').simulate('change', { target: { value: 'Test Text' } });
    wrapper.find('.transfer-method').simulate('change', { target: { value: 'Text Message' } });
    expect(setMainInfo).toBeCalledTimes(4);
  });

  it('change FormControl to call setContactToSend', () => {
    const setContactToSend = jest.fn();
    const wrapper = shallow(
      <DetailsPage
        setCurrentStep={jest.fn()}
        setPageIndex={jest.fn()}
        setMainInfo={jest.fn()}
        mainInfo={{}}
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
    wrapper.find('.send-account-select').simulate('change', { target: { value: 'Text Message' } });
    expect(setContactToSend).toBeCalledTimes(1);
    wrapper.find('Button').at(1).simulate('click');
  });
});
