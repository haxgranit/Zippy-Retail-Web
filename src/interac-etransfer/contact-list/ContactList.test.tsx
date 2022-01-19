import { render } from '@testing-library/react';
import { ContactListContent } from './ContactList';

const ReactTestRenderer = require('react-test-renderer');

describe('Contact List Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <ContactListContent
        contacts={[]}
        onDeletePressed={jest.fn()}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render contact list', () => {
    const { getByText } = render(
      <ContactListContent
        contacts={[]}
        onDeletePressed={jest.fn()}
      />,
    );
    expect(getByText('Add, Edit or Delete a Contact')).toBeInTheDocument();
  });
});
