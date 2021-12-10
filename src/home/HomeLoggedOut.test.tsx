import Enzyme, { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import HomeLoggedOut from './HomeLoggedOut';
import '../i18n/config';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

const mockUseMsal = jest.fn();
jest.mock('@azure/msal-react', () => ({
  useMsal: () => ({
    instance: {
      loginRedirect: () => mockUseMsal,
    },
  }),
}));

describe('HomeLoggedOut Component', () => {
  it('click buttons on HomeLoggedOut', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <HomeLoggedOut />
      </BrowserRouter>,
    );

    const component = wrapper.childAt(0).dive();
    component.find('button').at(0).simulate('click');
    component.find('button').at(1).simulate('click');
    component.find('button').at(2).simulate('click');
    component.find('button').at(3).simulate('click');
  });
});
