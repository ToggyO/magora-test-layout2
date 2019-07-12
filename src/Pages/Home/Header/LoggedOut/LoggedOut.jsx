import React from 'react';
import './LoggedOut.sass'
// import avatar from '../../../../img/avatar.jpg';

const LoggedOut = () => {
  return (
    <div className="header-changeGroup d-f jc-fe">
      <div className="header-changeGroup__items d-f">
        <button
          className="header-changeGroup__signIn changeGroup-item__btn btn blue sm fs-18 lh-18 ls-27 fw-600 sh-btn-sm ml-12"
        >
          Sign In
        </button>
        <button
          className="header-changeGroup__join changeGroup-item__btn btn blue sm fs-18 lh-18 ls-27 fw-600 sh-btn-sm ml-12"
        >
          Join Tribus
        </button>
      </div>
    </div>
  );
}

export default LoggedOut;