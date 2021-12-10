import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Button } from 'react-bootstrap';
import CancelRequestForMoneyVerification from './CancelRequestForMoneyVerification';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('ٌRequest Sent Component', () => {
  it('should render CancelRequestForMoneyVerification', () => {
    const show = true;
    const handleCancelRequest = jest.fn();
    const handleBack = jest.fn();
    const wrapper = shallow(
      <CancelRequestForMoneyVerification
        show={show}
        handleCancelRequest={handleCancelRequest}
        handleBack={handleBack}
      />,
    );
    expect(wrapper.exists);
  });
  it('should click Back button on CancelRequestForMoneyVerification', () => {
    const show = true;
    const handleCancelRequest = jest.fn();
    const handleBack = jest.fn();
    const wrapper = shallow(
      <CancelRequestForMoneyVerification
        show={show}
        handleCancelRequest={handleCancelRequest}
        handleBack={handleBack}
      />,
    );

    const buttons = wrapper.find(Button);
    buttons.at(0).simulate('click');
    expect(handleBack).toBeCalled();
  });
  it('should click CancelRequest button on CancelRequestForMoneyVerification', () => {
    const show = true;
    const handleCancelRequest = jest.fn();
    const handleBack = jest.fn();
    const wrapper = shallow(
      <CancelRequestForMoneyVerification
        show={show}
        handleCancelRequest={handleCancelRequest}
        handleBack={handleBack}
      />,
    );
    
    const buttons = wrapper.find(Button);
    buttons.at(1).simulate('click');
    expect(handleCancelRequest).toBeCalled();
  });
});
