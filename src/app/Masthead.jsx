import React from 'react';

import './css/masthead.css'

export default (props) => {
  const className = props.className || '';

  return (
    <div className={`masthead ${className} container`}>
      {props.children}
    </div>
  );
}
