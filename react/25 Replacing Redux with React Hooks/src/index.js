import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import configurProductsStore from './hooks-store/products-store';

configurProductsStore();

ReactDOM.render(
  
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);
