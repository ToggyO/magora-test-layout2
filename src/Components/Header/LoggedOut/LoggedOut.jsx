import React from 'react';
import './LoggedOut.sass'
import { NavLink } from 'react-router-dom';
import { modalOpen } from "../../../Store/Actions/actionModal";
import { connect } from 'react-redux';

const LoggedOut = (props) => {
  return (
    <div className="header-changeGroup d-f jc-fe">
      <div className="header-changeGroup__items d-f">
        <button
          className="header-changeGroup__signIn changeGroup-item__btn btn blue sm fs-18 lh-18 ls-27 fw-600 sh-btn-sm ml-12"
          onClick={ () => props.openModal('signInModal') }
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
};

let mapDispatchToProps = (dispatch) => {
  return {
    openModal: (modalKey) => {
      dispatch( modalOpen(modalKey) );
    }
  }
};

export default connect( null, mapDispatchToProps )(LoggedOut);