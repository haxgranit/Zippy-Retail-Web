import Enzyme, { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Footer from './Footer';
import '../i18n/config';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('Footer Component', () => {
  it('should delete contact', () => {
    const wrapper = shallow(<Footer />);
    const preventMethod = jest.fn();
    const mEvent = { preventDefault: preventMethod };

    wrapper.find('.text-decoration-none').at(1).simulate('click', mEvent);
    wrapper.find('.text-decoration-none').at(2).simulate('click', mEvent);
    wrapper.find('.text-decoration-none').at(3).simulate('click', mEvent);
    wrapper.find('.text-decoration-none').at(6).simulate('click', mEvent);
    wrapper.find('.text-decoration-none').at(7).simulate('click', mEvent);
    wrapper.find('.text-decoration-none').at(8).simulate('click', mEvent);
    expect(preventMethod).toHaveBeenCalledTimes(6);
  });
});
