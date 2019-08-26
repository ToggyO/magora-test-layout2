import React from 'react';
import './Logged.sass'
import {bindActionCreators} from "redux";
import {logOut} from "../../../Store/Actions/Auth/actionAuth";
import {connect} from "react-redux";
import {clearLocalState} from "../../../Libs/localStorage";
import Icon from "../../../Icons/Icons";
import {Dropdown} from "../../Dropdown";
import {NavLink} from "react-router-dom";


const LoggedIn = (props) => {

  const { authData } = props;

  const isAuthFalse = () => {
    return () => {
      clearLocalState('TOKEN_INFO');
      clearLocalState('USER_INFO');
      props.logOut();
    };
  };

  const getDropdownList = () => {
    return [
      <NavLink
        to='#'
        className='h2-black fs-18 lh-48 fw-600'>
        Go to profile
      </NavLink>,
      <NavLink to='#' className='h2-black fs-18 lh-48 fw-600'>
        Settings
      </NavLink>,
      <div onClick={isAuthFalse()} className='h2-black fs-18 lh-48 fw-600'>
        Log Out
      </div>,
    ];
  };

  return (
    <div className="header-changeGroup d-f">
      <Dropdown
        list={getDropdownList()}
        listClassName='headerDropdownList'
        elementClassName='headerDropdownList__element'
      >
        <div className="header-changeGroup__items" >
          {authData.me.resource !== null
            ?  <img
              className="changeGroup__btn sh-avatar"
              // onError={(e) => e.target.src = placeholderAvatar}
              src={authData.me.resource.originalUrl}
              alt="small"
            />
            : <Icon
              iconName='avatar'
              className='avatar_profile changeGroup__btn sh-avatar'
            />
          }
        </div>
      </Dropdown>
    </div>
  );
};

const mapStateToProps = ({authData}) => ({authData});

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: bindActionCreators(logOut, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);
