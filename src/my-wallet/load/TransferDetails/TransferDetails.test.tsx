import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TransferDetails from './TransferDetails';

const ReactTestRenderer = require('react-test-renderer');

describe('TransactionComplete Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <BrowserRouter>
        <TransferDetails />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
