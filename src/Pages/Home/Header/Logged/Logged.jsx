import React from 'react';
import './Logged.sass'
import avatar from '../../../../img/avatar.jpg';

const Header = () => {
  return (
    <div className="header-changeGroup d-f">
      <button
        style={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.18)'}}
        className="btn green sm fs-18 lh-18 ls-27 fw-500 sh-btn-sm mr-12"
      >
        Create Project
      </button>
      <img className="sh-avatar" src={avatar} alt="user"/>
    </div>
  );
}

export default Header;