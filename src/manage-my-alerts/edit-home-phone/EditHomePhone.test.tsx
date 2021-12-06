import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import EditHomePhone from './EditHomePhone';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('EditHomePhone Component', () => {
  it('Click cancel button on EditHomePhone', () => {
    const handleCancel = jest.fn();
    const handleSave = jest.fn();
    const wrapper = shallow(
      <EditHomePhone show handleSave={handleSave} handleCancel={handleCancel} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    wrapper.findWhere((node : any) => node.type() === 'button' && node.text() === 'Cancel').simulate('click', mEvent);
    expect(handleCancel).toBeCalledTimes(1);
  });
  it('Click save button on EditHomePhone', () => {
    const handleClose = jest.fn();
    const handleSave = jest.fn();
    const wrapper = shallow(
      <EditHomePhone show handleSave={handleSave} handleCancel={handleClose} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    wrapper.findWhere((node : any) => node.type() === 'button' && node.text() === 'Save').simulate('click', mEvent);
    expect(handleSave).toBeCalledTimes(1);
  });
});
