import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Modal } from 'react-bootstrap';
import ManageMyAlerts from './ManageMyAlerts';
import EditBusinessPhone from './edit-business-phone/EditBusinessPhone';
import EditHomePhone from './edit-home-phone/EditHomePhone';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('Manage Alert Component', () => {
  it('Click Edit Home Phone button  ', () => {
    const wrapper = shallow(<ManageMyAlerts />);
    expect(wrapper.find(EditHomePhone).prop('show')).toBe(false);
    wrapper.find('Button[variant="link"]').at(2).simulate('click');
    expect(wrapper.find(EditHomePhone).prop('show')).toBe(true);
  });
  it('Click Edit Business Phone  button ', () => {
    const wrapper = shallow(<ManageMyAlerts />);
    expect(wrapper.find(EditBusinessPhone).prop('show')).toBe(false);
    wrapper.find('Button[variant="link"]').at(3).simulate('click');
    expect(wrapper.find(EditBusinessPhone).prop('show')).toBe(true);
  });
});
