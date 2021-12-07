import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import EditMobilePhone from './EditMobilePhone';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('EditMobilePhone Component', () => {
  it('Click cancel button on EditMobilePhone', () => {
    const handleCancel = jest.fn();
    const handleNext = jest.fn();
    const wrapper = shallow(
      <EditMobilePhone show handleNext={handleNext} handleCancel={handleCancel} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    wrapper.findWhere((node : any) => node.type() === 'button' && node.text() === 'Cancel').simulate('click', mEvent);
    expect(handleCancel).toBeCalledTimes(1);
  });
  it('Click save button on EditHomePhone', () => {
    const handleClose = jest.fn();
    const handleNext = jest.fn();
    const wrapper = shallow(
      <EditMobilePhone show handleNext={handleNext} handleCancel={handleClose} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    wrapper.findWhere((node : any) => node.type() === 'button' && node.text() === 'Next').simulate('click', mEvent);
    expect(handleNext).toBeCalledTimes(1);
  });
});
