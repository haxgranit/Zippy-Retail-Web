import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import EditContact from './EditContact';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

const CONTACT_MOCK = {
  key: 1,
  name: '392 Jones',
  lang: 'English',
  email: 'lu_ben2002@yahoo.com',
  phone: '',
};

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useLocation: () => ({
    item: CONTACT_MOCK,
  }),
}));

describe('EditContact Component', () => {
  it('should render title', () => {
    const setShow = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setShow]);
    const wrapper = shallow(<EditContact />);
    const header = wrapper.find('CommonHeader');
    expect(header).toHaveLength(1);
  });

  it('click next button', () => {
    const setShow = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setShow]);
    const wrapper = shallow(<EditContact />);
    wrapper.find('Button').at(1).simulate('click');
    expect(setShow).toHaveBeenCalled();
  });
});
