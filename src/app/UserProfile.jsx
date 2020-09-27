import React, { useState } from 'react';
import './css/user-profile.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  const signout = () => {
    window.location.href = '/';
  }

  return (
    <div className="dropdown">
      <div className="user-account dropdown__button" onClick={() => setIsOpen(true)}>
        <img src="/imgs/warrior-avatar.svg" alt=""/>
      </div>

      { isOpen &&
        <div
          onClick={() => setIsOpen(false)}
          className="dropdown__closer"
          tabIndex="-1"
        ></div>
      }

      { isOpen &&
        <div className="dropdown__menu">
          <button onClick={() => signout()}>Sign-out <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        </div>
      }

    </div>
  );
}
