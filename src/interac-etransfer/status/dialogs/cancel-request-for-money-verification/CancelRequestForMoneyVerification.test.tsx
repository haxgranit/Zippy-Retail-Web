import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CancelRequestForMoneyVerification from './CancelRequestForMoneyVerification';
import { Button } from 'react-bootstrap';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('ٌRequest Sent Component', () => {
  it('should render CancelRequestForMoneyVerification', () => {
    let show = true;
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
  it('should click buttons on CancelRequestForMoneyVerification', () => {
    let show = true;
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

    buttons.at(1).simulate('click');
    expect(handleCancelRequest).toBeCalled();
  });
});
