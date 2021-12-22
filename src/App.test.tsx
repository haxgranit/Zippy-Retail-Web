import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import App from './App';
import i18n from './i18n/config';
import { Provider } from 'react-redux';
import { store } from './app/store';

// Configure enzyme for react 17
Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('change language query in the url ', () => {
    const pageUrl = '?language=en-ES';
    window.history.pushState('', '', pageUrl);
    jest.spyOn(i18n, 'changeLanguage');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mount(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(i18n.changeLanguage).toBeCalled();
  });
});
