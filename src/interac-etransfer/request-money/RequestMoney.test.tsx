// import React from 'react';
// import Enzyme, { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// import RequestMoney from './RequestMoney';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('Request Money Component', () => {
  it('should click next step button', () => {
    /*
    const wrapper = shallow(<RequestMoney />);

    const leftWrapper = wrapper.find('LeftCol').dive();
    const stepWrapper = leftWrapper.find('StepComponent').dive();
    stepWrapper.find('div[role="button"]').at(0).simulate('click');
    */
  });
});
