import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/auth-provider';

import { App } from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
