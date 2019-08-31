import React from 'react';
import { connect } from 'react-redux';
import './LoggedOut.sass';
import { NavLink } from 'react-router-dom';
import { modalOpen } from '../../../Store/Actions/modal/actionModal';
import { ROUTES } from '../../../Constants';


const LoggedOut = (props) => (
    <div className="header-changeGroup d-f jc-fe">
      <div className="header-changeGroup__items d-f">
        <button
          className="header-changeGroup__signIn changeGroup-item__btn btn blue sm fs-18 lh-18 ls-27 fw-600 sh-btn-sm ml-12"
          onClick={ () => props.openModal('signInModal') }
        >
          Sign In
        </button>
        <NavLink to={`/${ROUTES.REG_PAGE}`} className="header-changeGroup__join">
          <button
            className="changeGroup-item__btn btn blue sm fs-18 lh-18 ls-27 fw-600 sh-btn-sm ml-12"
          >
            Join Tribus
          </button>
        </NavLink>
      </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
  openModal: (modalKey) => {
    dispatch(modalOpen(modalKey));
  },
});

export default connect(null, mapDispatchToProps)(LoggedOut);
