import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { UserProvider } from './context';

ReactDom.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
