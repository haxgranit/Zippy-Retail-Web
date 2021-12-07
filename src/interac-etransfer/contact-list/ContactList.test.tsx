import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ContactList from './ContactList';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

const CONTACTS_MOCK = [
  {
    key: 1,
    name: '392 Jones',
    lang: 'English',
    email: 'lu_ben2002@yahoo.com',
    phone: '',
  },
  {
    key: 2,
    name: 'Auto Island Inc',
    lang: 'English',
    email: '',
    phone: '647-747-6109',
  },
];

describe('Contact List Component', () => {
  it('should delete contact', () => {
    const wrapper = shallow(<ContactList initialContacts={CONTACTS_MOCK} />);
    wrapper.find('#contact-list-1').simulate('click');
    wrapper.update();
    const modal = wrapper.find('RemoveContactModal');
    expect(modal).toHaveLength(1);
  });
});
