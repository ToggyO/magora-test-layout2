import React from 'react';
import './Logged.sass'
import avatar from '../../../../img/avatar.jpg';

const Header = () => {
  return (
            <div className="header-changeGroup d-f">
              <button className="btn-green-sm sh-btn-sm-op18 mr-12">Create Project</button>
              <img className="sh-avatar" src={avatar} alt="user"/>
            </div>
  );
}

export default Header;