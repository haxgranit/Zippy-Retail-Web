import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import RequestDetails from './RequestDetails';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('Request Details Component', () => {
  it('should click next step button', () => {
    const setCurrentStep = jest.fn();
    const wrapper = shallow(<RequestDetails setCurrentStep={setCurrentStep} />);

    wrapper
      .find('.account-from')
      .simulate('change', { target: { value: 'index' } });
    wrapper.find('Button[variant="danger"]').simulate('click');
    expect(setCurrentStep).toHaveBeenCalled();
  });
});
