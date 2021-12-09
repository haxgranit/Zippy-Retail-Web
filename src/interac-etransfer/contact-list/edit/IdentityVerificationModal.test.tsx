import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import IdentityVerificationModal from './IdentityVerificationModal';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

const CONTACT_MOCK = {
  key: 1,
  name: '392 Jones',
  lang: 'English',
  email: 'lu_ben2002@yahoo.com',
  phone: '',
};

describe('IdentityVerificationModal Component', () => {
  it('should render title', () => {
    const setStep = jest.fn();
    const handleClose = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setStep]);
    const wrapper = shallow(<IdentityVerificationModal show={true} handleClose={handleClose} selectedContact={CONTACT_MOCK} />);
    const header = wrapper.find('VerificationStep');
    expect(header).toHaveLength(1);
  });

  it('click VerificationStep buttons', () => {
    const setStep = jest.fn();
    const handleClose = jest.fn();
    React.useState = jest
      .fn()
      .mockImplementationOnce((x) => [x, setStep]);
    const wrapper = shallow(<IdentityVerificationModal show={true} handleClose={handleClose} selectedContact={CONTACT_MOCK} />);
    const firstStepWrapper = wrapper.find('VerificationStep').dive();
    firstStepWrapper.find('Button[variant="link"]').at(0).simulate('click');
    firstStepWrapper.find('button').at(0).simulate('click');
    firstStepWrapper.find('button').at(1).simulate('click');
    expect(setStep).toHaveBeenCalled();
  });

  it('click SendCodeStep buttons', () => {
    const setStep = jest.fn();
    const setShowOptions = jest.fn();
    const setIsSent = jest.fn();
    const handleClose = jest.fn();
    const initialStateForStep = 1;
    React.useState = jest
      .fn()
      .mockReturnValueOnce([initialStateForStep, {}])
      .mockImplementationOnce((x) => [x, setShowOptions])
      .mockImplementationOnce((x) => [x, setIsSent]);
    const wrapper = shallow(<IdentityVerificationModal show={true} handleClose={handleClose} selectedContact={CONTACT_MOCK} />);
    const secondStepWrapper = wrapper.find('SendCodeStep').dive();
    secondStepWrapper.find('Button[variant="link"]').at(0).simulate('click');
    expect(setShowOptions).toHaveBeenCalled();
    secondStepWrapper.find('Button[variant="outline-danger"]').at(0).simulate('click');
    expect(setIsSent).toHaveBeenCalled();
    secondStepWrapper.find('Button[variant="link"]').at(1).simulate('click');
    expect(handleClose).toHaveBeenCalled();
  });
});
