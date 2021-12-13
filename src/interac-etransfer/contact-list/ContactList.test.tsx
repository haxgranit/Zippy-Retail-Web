import React from 'react';
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

  it('click a close button on modal', () => {
    const setModalShow = jest.fn();

    const wrapper = shallow(<ContactList initialContacts={CONTACTS_MOCK} />);
    wrapper.find('Button').at(0).simulate('click');
    wrapper.update();

    const modal = wrapper.find('RemoveContactModal');
    expect(modal).toHaveLength(1);
    const modalWrapper = modal.dive();
    modalWrapper.find('Button').at(0).simulate('click');
    modalWrapper.find('Button').at(2).simulate('click');
  })
});
