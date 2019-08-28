import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Logged.sass';
import { bindActionCreators } from 'redux';
import { logOut } from '../../../Store/Actions/Auth/actionAuth';
import { clearLocalState } from '../../../Libs/localStorage';
import Icon from '../../../Icons/Icons';
import { Dropdown } from '../../Dropdown';
import { KEYWORD, ROUTES } from '../../../Constants';


const LoggedIn = (props) => {
  const { authData } = props;

  const isAuthFalse = () => (
    () => {
      clearLocalState('TOKEN_INFO');
      clearLocalState('USER_INFO');
      props.logOut();
    }
  );

  const getDropdownList = () => (
    [
      <Link
        to={`/${ROUTES.USER_PROFILE}/${authData.me.user.id}/${KEYWORD.ABOUT}`}
        className="dropdown-list-element-style h2-black fs-18 lh-48 fw-600">
        Go to profile
      </Link>,
      <Link to="#" className="dropdown-list-element-style h2-black fs-18 lh-48 fw-600">
        Edit Profile
      </Link>,
      <div onClick={isAuthFalse()} className="dropdown-list-element-style h2-black fs-18 lh-48 fw-600">
        Sign Out
      </div>,
    ]
  );

  return (
    <div className="header-changeGroup d-f">
      <Dropdown
        list={getDropdownList()}
        listClassName="headerDropdownList"
        elementClassName="headerDropdownList__element"
      >
        <div className="header-changeGroup__items" >
          {authData.me.resource !== null
            ? <img
              className="changeGroup__btn sh-avatar"
              // onError={(e) => e.target.src = placeholderAvatar}
              src={authData.me.resource.originalUrl}
              alt="small"
            />
            : <Icon
              iconName="avatar"
              className="avatar_profile changeGroup__btn sh-avatar"
            />
          }
        </div>
      </Dropdown>
    </div>
  );
};

const mapStateToProps = ({ authData }) => ({ authData });

const mapDispatchToProps = (dispatch) => ({
  logOut: bindActionCreators(logOut, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);
