import React from 'react';
import './LoggedOut.sass'
// import avatar from '../../../../img/avatar.jpg';

const LoggedOut = () => {
  return (
    <div className="header-changeGroup d-f">
      <button
        className="header-changeGroup__signIn changeGroup-class btn blue sm fs-18 lh-18 ls-27 fw-600 sh-btn-sm mr-12"
      >
        Sign In
      </button>
      <button
        className="header-changeGroup__join changeGroup-class btn blue sm fs-18 lh-18 ls-27 fw-600 sh-btn-sm"
      >
        Join Tribus
      </button>
    </div>
  );
}

export default LoggedOut;