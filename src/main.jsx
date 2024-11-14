import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store.js';
import { Toaster } from 'react-hot-toast';

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Toaster />
  </Provider>,
  document.getElementById('root')
);
