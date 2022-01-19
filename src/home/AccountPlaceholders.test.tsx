import '../i18n/config';
import AccountPlaceholders from './AccountPlaceholders';

const ReactTestRenderer = require('react-test-renderer');

describe('AccountPlaceholders Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<AccountPlaceholders />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
