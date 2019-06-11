import React from 'react';
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';

const wrapper = ({children}) => (
  <Router>{children}</Router>
);

const customRender = (ui, options) =>
  render(ui, { wrapper, ...options });

export * from '@testing-library/react';

export { customRender as render };
