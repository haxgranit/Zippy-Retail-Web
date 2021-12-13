import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import RequestSent from './RequestSent';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('Request Sent Component', () => {
  it('should click Send another transfer button', () => {
    const setCurrentStep = jest.fn();
    const wrapper = shallow(<RequestSent setCurrentStep={setCurrentStep} />);
    wrapper.find('Button[variant="danger"]').simulate('click');
    expect(setCurrentStep).toHaveBeenCalled();
  });
});
