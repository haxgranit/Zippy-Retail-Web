import { ViewBalancePure } from './ViewBalance';

const ReactTestRenderer = require('react-test-renderer');

describe('ViewBalance Component', () => {
  it('matches the snapshot when loaded', () => {
    const tree = ReactTestRenderer.create(
      <ViewBalancePure balance={1000} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches the snapshot when loading', () => {
    const tree = ReactTestRenderer.create(
      <ViewBalancePure balance={undefined} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
