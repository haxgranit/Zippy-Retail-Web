import { render } from './test-utils';
import App from './App';
import i18n from './i18n/config';

describe('App', () => {
  it('change language query in the url ', () => {
    const pageUrl = '?language=en-ES';
    window.history.pushState('', '', pageUrl);
    jest.spyOn(i18n, 'changeLanguage');
    render(<App />);
    expect(i18n.changeLanguage).toBeCalled();
  });
});
