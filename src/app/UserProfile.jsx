import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './css/user-profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

export default () => {
  const profile = useSelector(state => state.member);

  const [isOpen, setIsOpen] = useState(false);

  const signout = () => {
    window.location.href = '/';
  }

  return (
    <div className="dropdown">
      <div className="user-account dropdown__button" onClick={() => setIsOpen(true)}>
        <img src={`/imgs/profiles/${profile.profileImg}`} alt="User profile avatar"/>
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
