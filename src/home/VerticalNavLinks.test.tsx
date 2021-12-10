import Enzyme, { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import VerticalNavLinks from './VerticalNavLinks';
import '../i18n/config';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('VerticalNavLinks Component', () => {
  it('click buttons on VerticalNavLinks', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <VerticalNavLinks />
      </BrowserRouter>,
    );

    const component = wrapper.childAt(0).dive();
    component.find('.nav-link').at(0).simulate('click');
    component.find('.nav-link').at(1).simulate('click');
    component.find('.nav-link').at(2).simulate('click');
    component.find('.nav-link').at(3).simulate('click');
  });
});
