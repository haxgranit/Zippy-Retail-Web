import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Footer from './Footer';
import '../i18n/config';

describe('Footer Component', () => {
  it('click footer links', () => {
    const { container, getAllByText } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    const preventMethod = jest.fn();
    const mEvent = { preventDefault: preventMethod };

    fireEvent.click(container.querySelectorAll('.text-decoration-none')[1], mEvent);
    fireEvent.click(container.querySelectorAll('.text-decoration-none')[2], mEvent);
    fireEvent.click(container.querySelectorAll('.text-decoration-none')[3], mEvent);
    fireEvent.click(container.querySelectorAll('.text-decoration-none')[6], mEvent);
    fireEvent.click(container.querySelectorAll('.text-decoration-none')[7], mEvent);
    fireEvent.click(container.querySelectorAll('.text-decoration-none')[8], mEvent);
    expect(getAllByText('dev docs')[0]).toBeInTheDocument();
  });
});
