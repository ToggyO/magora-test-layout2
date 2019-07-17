import React from 'react';
import './LoggedOut.sass'
import { NavLink } from 'react-router-dom';

const LoggedOut = () => {



  return (
    <div className="header-changeGroup d-f jc-fe">
      <div className="header-changeGroup__items d-f">
        <button
          className="header-changeGroup__signIn changeGroup-item__btn btn blue sm fs-18 lh-18 ls-27 fw-600 sh-btn-sm ml-12"
        >
          Sign In
        </button>
        <NavLink to='/registration' className="header-changeGroup__join">
          <button
            className="changeGroup-item__btn btn blue sm fs-18 lh-18 ls-27 fw-600 sh-btn-sm ml-12"
          >
            Join Tribus
          </button>
        </NavLink>

      </div>
    </div>
  );
}

export default LoggedOut;