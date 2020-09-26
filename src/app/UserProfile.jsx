import React, { useState } from 'react';
import './css/user-profile.css';

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  const signout = () => {
    window.location.href = '/';
  }

  return (
    <div className="dropdown">
      <div className="user-account dropdown__button" onClick={() => setIsOpen(true)}>
        <img src="/imgs/logged-in-user.svg" alt=""/>
      </div>

      { isOpen &&
        <div
          onClick={() => setIsOpen(false)}
          className="dropdown__closer"
          tabindex="-1"
        ></div>
      }

      { isOpen &&
        <div className="dropdown__menu">
          <button onClick={() => signout()}>Signout</button>
        </div>
      }

    </div>
  );
}
