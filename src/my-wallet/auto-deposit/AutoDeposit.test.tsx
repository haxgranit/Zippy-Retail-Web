import AutoDeposit from './AutoDeposit';

const ReactTestRenderer = require('react-test-renderer');

describe('AutoDeposit Component', () => {
  it('matches the snapshot when loaded', () => {
    const tree = ReactTestRenderer.create(<AutoDeposit />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
