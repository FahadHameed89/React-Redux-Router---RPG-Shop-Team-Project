import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Statistics from './components/stats';
import './components/stats.css';

import ProductStats from './product/ProductStats';

const testStats = {
  "HP":    10,
  "MP":    0,
  "ATK":   42,
  "DEF":   0,
  "MATK":  0,
  "MDEF":  0,
  "SPD":   0,
  "EVA":   0,
  "ACC":   80,
  "CRT":   5
};

ReactDOM.render(
  <React.StrictMode>
    {/* <Statistics /> */}
    <ProductStats stats={testStats} />
  </React.StrictMode>,
  document.getElementById('root')
);
