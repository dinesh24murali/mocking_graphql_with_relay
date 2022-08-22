import React from 'react';
import { render } from '@testing-library/react';

/**
 * 
 * @param {React component} any React component
 * @returns React component wrapped around with the store
 */
const Provider = ({ children }) => {
  return <>
    {children}
  </>;
};

const customRender = (ui, options) => render(ui, { wrapper: Provider, ...options });

// override render method
export { customRender };
