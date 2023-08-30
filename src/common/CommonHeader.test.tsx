import '../i18n/config';
import CommonHeader from './CommonHeader';

const ReactTestRenderer = require('react-test-renderer');

describe('CommonHeader Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<CommonHeader title="sample" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
