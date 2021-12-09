import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MemoryRouter } from 'react-router';
import App from './App';
import i18n from './i18n/config';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('change language query in the url ', () => {
    const pageUrl = '?language=en-ES';
    window.history.pushState('', '', pageUrl);
    jest.spyOn(i18n, 'changeLanguage');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const wrapper = mount(
      <MemoryRouter initialEntries={['/?language=en-US']}>
        <App />
      </MemoryRouter>,
    );
    expect(i18n.changeLanguage).toBeCalled();
  });
});
