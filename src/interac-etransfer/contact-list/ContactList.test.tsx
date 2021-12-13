import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ContactList from './ContactList';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('Contact List Component', () => {
  it('should delete contact', () => {
    const wrapper = shallow(<ContactList />);
    const modal = wrapper.find('RemoveContactModal');
    expect(modal).toHaveLength(1);
  });
});
