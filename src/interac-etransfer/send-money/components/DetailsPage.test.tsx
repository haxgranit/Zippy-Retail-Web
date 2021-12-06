import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import DetailsPage from './DetailsPage';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('DetailsPage Component', () => {
  it('Click next button on DetailsPage', () => {
    const setRealStep = jest.fn();
    const wrapper = shallow(
      <DetailsPage setCurrentStep={jest.fn()} setRealStep={setRealStep} />,
    );
    const mEvent = { preventDefault: jest.fn() };
    wrapper.find('Button[variant="danger"]').simulate('click', mEvent);
    expect(setRealStep).toBeCalledTimes(1);
  });
});
