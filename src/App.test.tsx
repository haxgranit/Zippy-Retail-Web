import { render, screen } from './test-utils';
import App from './App';
import i18n from './i18n/config';

describe('App', () => {
  test('change language query in the url for en-CA', () => {
    const pageUrl = '?language=en-CA';
    window.history.pushState('', '', pageUrl);
    jest.spyOn(i18n, 'changeLanguage');
    render(<App />);
    expect(i18n.changeLanguage).toBeCalled();
  });

  test('change language query in the url for fr-CA', () => {
    const pageUrl = '?language=fr-CA';
    window.history.pushState('', '', pageUrl);
    jest.spyOn(i18n, 'changeLanguage');
    render(<App />);
    expect(i18n.changeLanguage).toBeCalled();
  });
});
