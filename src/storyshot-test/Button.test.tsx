import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('renders hello world', () => {
  const { getByText } = render(
    <Button />,
  );

  expect(getByText(/Hello/i)).toBeInTheDocument();
});
