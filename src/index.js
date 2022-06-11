import React from 'react';
import ReactDOM from 'react-dom'; //For React 17
import { createRoot } from 'react-dom/client';
import App from './App';

// For React 18
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  );

// For React 17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )