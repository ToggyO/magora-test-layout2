import React, {useState} from 'react';
import './Logged.sass'
import {bindActionCreators} from "redux";
import {logOut} from "../../../Store/Actions/Auth/actionAuth";
import {connect} from "react-redux";
import {clearLocalState} from "../../../Libs/localStorage";
import Icon from "../../../Icons/Icons";
import Dropdown from "../../Dropdown";
import {profileOptionsDropdown} from "./list";


const LoggedIn = (props) => {

  const { authData } = props;

  const isAuthFalse = () => {
    return () => {
      clearLocalState('TOKEN_INFO');
      clearLocalState('USER_INFO');
      props.logOut();
    };
  };


  const [ opened, toggleOpen ] = useState(false);


  return (
    <div className="header-changeGroup d-f">
      <div className="header-changeGroup__items" onClick={() => toggleOpen(!opened)}>
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
        <div className='header-changeGroup__dropdown'>
          <Dropdown
            list={profileOptionsDropdown}
            opened={opened}
          />
        </div>
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

const mapStateToProps = ({authData}) => ({authData});

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: bindActionCreators(logOut, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);
