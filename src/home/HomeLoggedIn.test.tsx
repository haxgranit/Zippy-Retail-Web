import './../i18n/config';
import HomeLoggedIn from './HomeLoggedIn';
import { BrowserRouter as Router } from "react-router-dom";

const ReactTestRenderer = require('react-test-renderer');

describe('HomeLoggedIn Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<Router><HomeLoggedIn /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
