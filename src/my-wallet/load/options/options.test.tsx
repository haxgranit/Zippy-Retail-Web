import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Options from './options';

const ReactTestRenderer = require('react-test-renderer');

// const mockedUsedNavigate = jest.fn();

// jest.mock('react-router-dom', () => ({
//   ...(jest.requireActual('react-router-dom') as any),
//   useParams: () => ({
//     stepId: 'details',
//   }),
//   useNavigate: () => mockedUsedNavigate,
// }));

describe('TransactionComplete Component', () => {
  it('matches the snapshot', () => {
    const fundingSources = [{ id: 1, isDefault: true, bankAccount: { institutionNumber: '123', transitNumber: '12345', accountNumber: '1234567890' } }, {
      id: 2,
      displayName: 'My Credit Card',
      isDefault: false,
      paymentCard: {
        name: 'John Doe', number: '1234456789012345', cvv: '123', expireDate: '2024-01-01T00:00:00',
      },
    }];
    const tree = ReactTestRenderer.create(
      <BrowserRouter>
        <Options
          defaultTitle="Select funding source"
          fundingSources={fundingSources}
          onChange={() => {}}
        />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
