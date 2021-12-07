import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import MonthSelectComponent from './MonthSelectComponent';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('MonthSelectComponent Component', () => {
  it('should render options inside a MonthSelectComponent', () => {
    const wrapper = shallow(<MonthSelectComponent />);
    const options = wrapper.find('option');
    expect(options).toHaveLength(12);
  });

  it('Click MonthSelectComponent Component', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<MonthSelectComponent onChange={onChange} />);
    const mEvent = { preventDefault: jest.fn() };
    wrapper.find('.month-select-comp').simulate('change', mEvent);
    expect(onChange).toBeCalledTimes(1);
  });
});
