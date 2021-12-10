import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
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
    mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(i18n.changeLanguage).toBeCalled();
  });
});
