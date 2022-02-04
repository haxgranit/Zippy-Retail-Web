import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ContactListContent } from './ContactList';

const ReactTestRenderer = require('react-test-renderer');

describe('Contact List Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <BrowserRouter>
        <ContactListContent
          contacts={[]}
          onDeletePressed={jest.fn()}
        />

      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render contact list', () => {
    const { getByText } = render(
      <BrowserRouter>
        <ContactListContent
          contacts={[]}
          onDeletePressed={jest.fn()}
        />

      </BrowserRouter>,
    );
    expect(getByText('Add, Edit or Delete a Contact')).toBeInTheDocument();
  });
});
