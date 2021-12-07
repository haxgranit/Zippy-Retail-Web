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

  it('change FormControl text values', () => {
    const setRealStep = jest.fn();
    const setMainInfo = jest.fn();
    const wrapper = shallow(
      <SecurityQuestionPage
        setRealStep={setRealStep}
        setMainInfo={setMainInfo}
        mainInfo={{}}
      />,
    );
    wrapper.find('FormControl').at(0).simulate('change', { target: { value: 'Test Text' } });
    wrapper.find('FormControl').at(1).simulate('change', { target: { value: 'Test Text' } });
    wrapper.find('FormControl').at(2).simulate('change', { target: { value: 'Test Text' } });
    wrapper.find('.is-show-answer').simulate('change', { target: { value: true } });
    expect(setMainInfo).toBeCalledTimes(4);

    wrapper.find('Button[variant="light"]').simulate('click');
    expect(setRealStep).toBeCalledTimes(1);
  });
});
