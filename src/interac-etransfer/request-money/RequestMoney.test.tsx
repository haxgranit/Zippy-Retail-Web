import Enzyme, { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import RequestMoney from './RequestMoney';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Request Money Component', () => {
  it('should click next step button', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <RequestMoney />
      </BrowserRouter>,
    );

    const stepWrapper = wrapper.childAt(0).dive().find('StepComponent').dive();
    stepWrapper.find('div[role="button"]').at(0).simulate('click');
  });
});
