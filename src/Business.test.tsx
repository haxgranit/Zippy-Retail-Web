import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import './i18n/config';

import Business from './Business';
// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

const mockLoginRedirect = jest.fn();
jest.mock('@azure/msal-react', () => ({
  ...(jest.requireActual('@azure/msal-react') as any),
  useMsal: () => ({
    instance: {
      loginRedirect: mockLoginRedirect,
    },
  }),
}));

describe('Business Component', () => {
  it('click a button on business', () => {
    const wrapper = shallow(<Business />);

    wrapper.find('button').at(0).simulate('click');
    expect(mockLoginRedirect).toHaveBeenCalled();
  });
});
