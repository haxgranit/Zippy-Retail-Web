import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoadStatus from './LoadStatus';

const ReactTestRenderer = require('react-test-renderer');

const mockedUsedNavigate = jest.fn();
// const mockeduseLocation = jest.fn().mockImplementation(() => ({ state: { status: 'Success' } }));

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useParams: () => ({
    stepId: 'details',
  }),
  useLocation: () => ({ state: { status: 'Success' } }),
  useNavigate: () => mockedUsedNavigate,
}));

describe('TransactionComplete Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <BrowserRouter>
        <LoadStatus />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
