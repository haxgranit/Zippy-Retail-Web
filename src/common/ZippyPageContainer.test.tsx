import '../i18n/config';
import ZippyPageContainer from './ZippyPageContainer';

const ReactTestRenderer = require('react-test-renderer');

describe('CommonPageContainer Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <ZippyPageContainer title="sample">
        <div>test</div>
      </ZippyPageContainer>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
