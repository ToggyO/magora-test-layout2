import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Logged.sass';
import { bindActionCreators } from 'redux';
import Icon from '../../../Icons/Icons';
import { Dropdown } from '../../Dropdown';
import { KEYWORD, ROUTES } from '../../../Constants';
import { isAuthFalse } from '../../../Libs/HelperFunctions';


const LoggedIn = (props) => {
  const { authData = {}, logOut } = props;
  const { me = {} } = authData;
  const { user = {}, resource } = me;

  const getDropdownList = () => (
    [
      <Link
        to={`/${ROUTES.USER_PROFILE}/${user.id}/${KEYWORD.ABOUT}`}
        className="dropdown-list-element-style h2-black fs-18 lh-48 fw-600">
        Go to profile
      </Link>,
      <Link
        to={`/${ROUTES.USER_PROFILE}/${user.id}/edit`}
        className="dropdown-list-element-style h2-black fs-18 lh-48 fw-600"
      >
        Edit Profile
      </Link>,
      <div onClick={logOut} className="dropdown-list-element-style h2-black fs-18 lh-48 fw-600">
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
          {resource !== null
            ? <img
              className="changeGroup__btn sh-avatar"
              // onError={(e) => e.target.src = placeholderAvatar}
              src={resource.formatUrls.small}
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

const mapStateToProps = ({ authData, userProfileData }) => ({ authData, userProfileData });

const mapDispatchToProps = (dispatch) => ({
  logOut: bindActionCreators(isAuthFalse, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);
