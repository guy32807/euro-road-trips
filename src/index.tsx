import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n'; // Make sure i18n is imported before rendering

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
