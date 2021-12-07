import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import EditEmailAccount from './EditEmailAccount';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('EditEmailAccount Component', () => {
  it('Click cancel button on EditEmailAccount', () => {
    const handleCancel = jest.fn();
    const handleSave = jest.fn();
    const wrapper = shallow(
      <EditEmailAccount show handleSave={handleSave} handleCancel={handleCancel} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    wrapper.findWhere((node : any) => node.type() === 'button' && node.text() === 'Cancel').simulate('click', mEvent);
    expect(handleCancel).toBeCalledTimes(1);
  });
  it('Click save button on EditEmailAccount', () => {
    const handleClose = jest.fn();
    const handleSave = jest.fn();
    const wrapper = shallow(
      <EditEmailAccount show handleSave={handleSave} handleCancel={handleClose} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    wrapper.findWhere((node : any) => node.type() === 'button' && node.text() === 'Save').simulate('click', mEvent);
    expect(handleSave).toBeCalledTimes(1);
  });
});
