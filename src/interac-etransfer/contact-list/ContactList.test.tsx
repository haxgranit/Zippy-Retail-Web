import { render } from '@testing-library/react';

import { ContactListContent } from './ContactList';

describe('Contact List Component', () => {
  const { getByText } = render(
    <ContactListContent contacts={[]} onDeletePressed={jest.fn()} />,
  );

  it('should render contact list', () => {
    expect(getByText('Add, Edit or Delete a Contact')).toBeInTheDocument();
  });
});
