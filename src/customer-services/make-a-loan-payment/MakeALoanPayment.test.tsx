import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import MakeALoanPayment from './MakeALoanPayment';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('ContributeToATfsa Page Component', () => {
  it('should render MakeALoanPayment', () => {
    const setSelectedRef = jest.fn();
    const wrapper = shallow(<MakeALoanPayment />);

    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setSelectedRef]);

    const mEvent = { preventDefault: jest.fn() };
    const keyEvent = { key: 'Enter' };
    wrapper.find('.option-btn').at(0).simulate('click', mEvent);
    wrapper.find('.option-btn').at(1).simulate('click', mEvent);
    wrapper.find('.option-btn').at(0).simulate('keydown', keyEvent);
    wrapper.find('.option-btn').at(1).simulate('keydown', keyEvent);
    expect(setSelectedRef).toBeCalledTimes(3);
  });
});
