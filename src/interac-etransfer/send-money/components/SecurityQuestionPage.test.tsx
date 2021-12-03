import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import SecurityQuestionPage from './SecurityQuestionPage';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('Security Question Page Component', () => {
  it('Click next button on Security Question Page', () => {
    const showModal = jest.fn();
    const wrapper = shallow(<SecurityQuestionPage showModal={showModal} />);
    const mEvent = { preventDefault: jest.fn() };
    wrapper.find('Button[variant="danger"]').simulate('click', mEvent);
    expect(showModal).toBeCalledTimes(1);
  });
});
