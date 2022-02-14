import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TransferDetails from './TransferDetails';

const ReactTestRenderer = require('react-test-renderer');

// const mockedUsedNavigate = jest.fn();

// jest.mock('react-router-dom', () => ({
//   ...(jest.requireActual('react-router-dom') as any),
//   useParams: () => ({
//     stepId: 'details',
//   }),
//   useLocation: () => ({ state: { status: 'Success' } }),
//   useNavigate: () => mockedUsedNavigate,
// }));

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
