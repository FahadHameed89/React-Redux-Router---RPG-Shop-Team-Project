import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStoreAsync from './app/store';

import App from './app/App';
import './index.css';

// import Statistics from './components/stats';
// import './components/stats.css';

import ProductStats from './product/ProductStats';
import './product/product.css';

const testStats = {
  "HP":    40,
  "MP":    20,
  "ATK":   42,
  "DEF":   25,
  "MATK":  69,
  "MDEF":  37,
  "SPD":   14,
  "EVA":   95,
  "ACC":   80,
  "CRT":   65
};

// Citation:
// https://stackoverflow.com/questions/37393176/redux-loading-initial-state-asynchronously
//
// The example given in the above link gave me the initial structure and idea for loading
// our json data asyncronously which forced us to delay the creation of our store objects
// which forced the delay of creating our react render hook.
//
configureStoreAsync()
  .then(res => {
    const store = res;

    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
        <ProductStats stats={testStats} />
        <App />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  })
