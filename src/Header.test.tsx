import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Header from './Header';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

const mockLoginRedirect = jest.fn();
const mockLogoutRedirect = jest.fn();
const mockChangeLanguage = jest.fn();
const mockI18nTranslate = jest.fn();

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      changeLanguage: () => mockChangeLanguage,
    },
    t: () => mockI18nTranslate,
  }),
}));

jest.mock('@azure/msal-react', () => ({
  useIsAuthenticated: () => true,
  useMsal: () => ({
    instance: {
      loginRedirect: () => mockLoginRedirect,
      logoutRedirect: () => mockLogoutRedirect,
    },
    inProgress: 'none',
  }),
}));

describe('Header', () => {
  it('change language on header ', () => {
    const wrapper = shallow(<Header />);
    wrapper.find('.nav-dropdown-item').at(0).simulate('click');
    wrapper.find('.nav-dropdown-item').at(1).simulate('click');
    wrapper.find('.nav-dropdown-item').at(2).simulate('click');
    wrapper.find('.nav-dropdown-item').at(3).simulate('click');
    wrapper.find('button').at(1).simulate('click');
  });

  it('click login button on header', () => {
    jest.mock('@azure/msal-react', () => ({
      useIsAuthenticated: () => false,
      useMsal: () => ({
        instance: {
          loginRedirect: () => mockLoginRedirect,
          logoutRedirect: () => mockLogoutRedirect,
        },
        inProgress: 'none',
      }),
    }));
    const wrapper = shallow(<Header />);
    wrapper.find('button').at(1).simulate('click');
  })
});
