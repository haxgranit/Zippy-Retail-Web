import { ZippyBalancePure } from './ZippyBalance';

const ReactTestRenderer = require('react-test-renderer');

describe('ZippyBalance Component', () => {
  it('matches the snapshot when loaded', () => {
    const tree = ReactTestRenderer.create(
      <ZippyBalancePure account={{ id: 1, name: '8000 001 000000000', balance: 1000 }} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches the snapshot when loading', () => {
    const tree = ReactTestRenderer.create(
      <ZippyBalancePure account={undefined} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
