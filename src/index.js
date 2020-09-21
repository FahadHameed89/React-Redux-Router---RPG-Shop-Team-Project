import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStoreAsync from './app/store';

import App from './app/App';
import './index.css';

configureStoreAsync()
  .then(res => {
    const store = res;

    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  })
