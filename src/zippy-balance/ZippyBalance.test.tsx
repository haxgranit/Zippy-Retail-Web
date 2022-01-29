import { ZippyBalancePure } from './ZippyBalance';

const ReactTestRenderer = require('react-test-renderer');

describe('ZippyBalance Component', () => {
  it('matches the snapshot when loaded', () => {
    const tree = ReactTestRenderer.create(
      <ZippyBalancePure balance={1000} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches the snapshot when loading', () => {
    const tree = ReactTestRenderer.create(
      <ZippyBalancePure balance={undefined} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
