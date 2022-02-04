import '../i18n/config';
import ContactSelector from './ContactSelector';

const ReactTestRenderer = require('react-test-renderer');

describe('ContactSelector Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <ContactSelector />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
