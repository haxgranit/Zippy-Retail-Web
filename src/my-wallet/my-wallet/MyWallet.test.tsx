import { BrowserRouter } from 'react-router-dom';
import { MyWalletPure } from './MyWallet';

const ReactTestRenderer = require('react-test-renderer');

describe('MyWallet Component', () => {
  it('matches the snapshot when loaded', () => {
    const tree = ReactTestRenderer.create(
      <BrowserRouter>
        <MyWalletPure account={{ id: 1, name: '8000 001 000000000', balance: 1000 }} />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches the snapshot when loading', () => {
    const tree = ReactTestRenderer.create(
      <BrowserRouter>
        <MyWalletPure account={undefined} />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
