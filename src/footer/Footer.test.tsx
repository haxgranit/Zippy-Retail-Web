import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Footer from './Footer';
import '../i18n/config';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('Footer Component', () => {
  it('click footer links', () => {
    const wrapper = shallow(<Footer />);
    const preventMethod = jest.fn();
    const mEvent = { preventDefault: preventMethod };

    wrapper.find('.text-decoration-none').at(0).simulate('click', mEvent);
    wrapper.find('.text-decoration-none').at(1).simulate('click', mEvent);
    wrapper.find('.text-decoration-none').at(2).simulate('click', mEvent);
    wrapper.find('.text-decoration-none').at(3).simulate('click', mEvent);
    wrapper.find('.text-decoration-none').at(4).simulate('click', mEvent);
    wrapper.find('.text-decoration-none').at(5).simulate('click', mEvent);
    expect(preventMethod).toHaveBeenCalledTimes(6);
  });
});
