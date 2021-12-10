import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import './i18n/config';

import PersonalProfile from './PersonalProfile';
// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('PersonalProfile Component', () => {
  it('click a links on PersonalProfile', () => {
    const wrapper = shallow(<PersonalProfile />);
    const mockPreventDefault = jest.fn();
    const mEvent = { preventDefault: mockPreventDefault };
    wrapper.find('.link-item').at(0).simulate('click', mEvent);
    wrapper.find('.link-item').at(1).simulate('click', mEvent);
    wrapper.find('.link-item').at(2).simulate('click', mEvent);
    wrapper.find('.link-item').at(3).simulate('click', mEvent);
    expect(mockPreventDefault).toHaveBeenCalled();
  });
});
