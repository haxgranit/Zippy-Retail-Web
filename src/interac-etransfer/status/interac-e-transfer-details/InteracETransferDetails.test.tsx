import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import InteracETransferDetails from './InteracETransferDetails';

// @ts-ignore
window.API_URL = 'https://zippy-retail-api-dev.azurewebsites.net';
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useParams: () => ({
    tabId: 'received',
  }),
  useNavigate: () => mockedUsedNavigate,
}));

describe('InteracETransferDetails Component', () => {
  it('should render InteracETransferDetails', () => {
    const { getByText } = render(
      <BrowserRouter>
        <InteracETransferDetails />
      </BrowserRouter>,
    );
    expect(getByText('Your Interac e-Transfer Details')).toBeInTheDocument();
  });

  it('should click buttons on InteracETransferDetails', () => {
    const { container } = render(
      <BrowserRouter>
        <InteracETransferDetails />
      </BrowserRouter>,
    );
    const mEvent = { preventDefault: jest.fn() };
    fireEvent.click(container.querySelectorAll('#status-tab-tabpane-sent .btn')[0], mEvent);
    fireEvent.click(container.querySelectorAll('#status-tab-tabpane-requested .btn')[0], mEvent);

    expect(mockedUsedNavigate).toBeCalledTimes(2);
  });
});
