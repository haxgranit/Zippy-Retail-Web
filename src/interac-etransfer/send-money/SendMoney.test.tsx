import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import SendMoney from './SendMoney';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('SendMoney Component', () => {
  it('should render StepComponent inside a SendMoney', () => {
    const wrapper = shallow(<SendMoney />);
    const header = wrapper.find('StepComponent');
    expect(header).toHaveLength(1);
  });

  it('should render DetailsPage inside a SendMoney', () => {
    const wrapper = shallow(<SendMoney />);
    const header = wrapper.find('DetailsPage');
    expect(header).toHaveLength(1);
  });
});
