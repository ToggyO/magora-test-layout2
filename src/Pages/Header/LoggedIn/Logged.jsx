import React from 'react';
import './Logged.sass'
import avatar from '../../../img/avatar.jpg';

const LoggedIn = () => {
  return (
    <div className="header-changeGroup d-f">
      <div className="header-changeGroup__items">
        <img className="changeGroup__btn sh-avatar" src={avatar} alt="user"/>
      </div>
    </div>
  );
}

export default LoggedIn;