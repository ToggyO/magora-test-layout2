import React from 'react';
import './Logged.sass'
import avatar from '../../../../img/avatar.jpg';

const LoggedIn = () => {
  return (
    <div className="header-changeGroup d-f">
      <img className="sh-avatar" src={avatar} alt="user"/>
    </div>
  );
}

export default LoggedIn;