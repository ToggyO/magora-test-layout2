import React from 'react';
import './LoggedOut.sass'
import avatar from '../../../../img/avatar.jpg';

const LoggedOut = (props) => {

  const { onClick } = props;

  return (
    <div className="header-changeGroup d-f">
      <button
        style={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.18)'}}
        className="header-changeGroup-create btn green sm fs-18 lh-18 ls-27 fw-600 sh-btn-sm mr-12"
        onClick={onClick}
      >
        Create Project
      </button>
      <button
        className="header-changeGroup-signIn btn blue sm fs-18 lh-18 ls-27 fw-600 sh-btn-sm mr-12"
      >
        Sign In
      </button>
      <button
        className="header-changeGroup-join btn blue sm fs-18 lh-18 ls-27 fw-600 sh-btn-sm"
      >
        Join Tribus
      </button>
    </div>
  );
}

export default LoggedOut;