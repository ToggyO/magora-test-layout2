import React from 'react';
import './Logged.sass'
import avatar from '../../../img/avatar.jpg';
import {bindActionCreators} from "redux";
import {logOut} from "../../../Store/Actions/Auth/actionAuth";
import {connect} from "react-redux";
import {clearLocalState} from "../../../Libs/localStorage";


const LoggedIn = (props) => {

  const isAuthFalse = () => {
    return () => {
      clearLocalState('TOKEN_INFO');
      clearLocalState('USER_INFO');
      props.logOut();
    };
  };

  return (
    <div className="header-changeGroup d-f">
      <div className="header-changeGroup__items">
        <img className="changeGroup__btn sh-avatar" src={avatar} alt="user"/>
      </div>
      <div>
        <button
          type='button'
          onClick={isAuthFalse()}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    logOut: bindActionCreators(logOut, dispatch),
  }
};

export default connect(null, mapDispatchToProps)(LoggedIn);
