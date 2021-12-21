import { FC, ReactElement } from 'react';
import './i18n/config';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const AllTheProviders: FC = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
