import React from 'react';
import { render } from '@testing-library/react';
import EditContact from './EditContact';

const CONTACT_MOCK = {
  key: 1,
  name: '392 Jones',
  firstName: '392',
  lastName: 'Jones',
  lang: 'English',
  email: 'lu_ben2002@yahoo.com',
  phone: '',
};

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useLocation: () => ({
    item: CONTACT_MOCK,
  }),
}));

describe('EditContact Component', () => {
  test('should render title', () => {
    const { getByText } = render(<EditContact />);
    const setShow = jest.fn();
    React.useState = jest.fn().mockImplementationOnce((x) => [x, setShow]);

    expect(getByText('EDIT CONTACT')).toBeInTheDocument();
  });
});
