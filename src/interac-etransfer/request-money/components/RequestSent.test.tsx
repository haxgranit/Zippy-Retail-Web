import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import RequestSent from './RequestSent';
import { BrowserRouter } from 'react-router-dom';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Request Sent Component', () => {
  it('should click Send another transfer button', () => {
    const setCurrentStep = jest.fn();
    const wrapper = shallow(
      <BrowserRouter>
        <RequestSent setCurrentStep={setCurrentStep} />
      </BrowserRouter>,
    );
    wrapper.childAt(0).dive().find('Button[variant="danger"]').simulate('click');
    expect(setCurrentStep).toHaveBeenCalled();
  });
});
