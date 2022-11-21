import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { Provider as AlertProvider } from 'react-alert'
import { AlertTemplate, options } from './shared/AlertConfig';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </React.StrictMode>
  </BrowserRouter>
);

