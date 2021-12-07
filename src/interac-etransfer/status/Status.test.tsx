import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Status from './Status';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('Status Component', () => {
  it('should render MonthSelectComponent inside a Status', () => {
    const wrapper = shallow(<Status />);
    const selectComponent = wrapper.find('MonthSelectComponent');
    expect(selectComponent).toHaveLength(3);
  });
});
