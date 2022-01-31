import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ZippyTransaction from './ZippyTransaction';

const ReactTestRenderer = require('react-test-renderer');

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useParams: () => ({
    stepId: 'details',
  }),
  useNavigate: () => mockedUsedNavigate,
}));

describe('ZippyTransaction Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(
      <BrowserRouter>
        <ZippyTransaction />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
