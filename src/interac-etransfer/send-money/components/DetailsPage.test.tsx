import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import DetailsPage from './DetailsPage';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('DetailsPage Component', () => {
  it('Click next button on DetailsPage', () => {
    const setRealStep = jest.fn();
    const wrapper = shallow(
      <DetailsPage setCurrentStep={jest.fn()} setRealStep={setRealStep} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    wrapper.find('Button[variant="danger"]').simulate('click', mEvent);
    expect(setRealStep).toBeCalledTimes(1);
  });

  it('Click next button on DetailsPage with option changing', () => {
    const setRealStep = jest.fn();
    const setUserToSend = jest.fn();
    const wrapper = shallow(
      <DetailsPage
        setCurrentStep={jest.fn()}
        setRealStep={setRealStep}
        setUserToSend={setUserToSend}
      />,
    );
    wrapper.find('.send-account-select').simulate('change', { target: { value: 2 } });

    const mEvent = { preventDefault: jest.fn() };
    wrapper.find('Button[variant="danger"]').simulate('click', mEvent);
    expect(setRealStep).toBeCalledTimes(1);
    expect(setUserToSend).toBeCalledTimes(1);
  });

  it('Click next button on DetailsPage with option 2', () => {
    const setRealStep = jest.fn();
    const setUserToSend = jest.fn();
    const wrapper = shallow(
      <DetailsPage
        setCurrentStep={jest.fn()}
        setRealStep={setRealStep}
        setUserToSend={setUserToSend}
        selectedUser={2}
      />,
    );

    const mEvent = { preventDefault: jest.fn() };
    wrapper.find('Button[variant="danger"]').simulate('click', mEvent);
    expect(setRealStep).toBeCalledTimes(1);
  });

  it('change FormControl text values', () => {
    const setRealStep = jest.fn();
    const setMainInfo = jest.fn();
    const wrapper = shallow(
      <DetailsPage
        setCurrentStep={jest.fn()}
        setRealStep={setRealStep}
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
});
