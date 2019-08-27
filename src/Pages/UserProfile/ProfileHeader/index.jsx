import React from 'react';
import './style.sass';
import {NavLink} from "react-router-dom";
import Icon from "../../../Icons/Icons";
import moment from 'moment';
import {PATH, ROUTES} from "../../../Constants";


const ProfileHeader = (props) => {

  const { authData = {}, userInfo = {} } = props;

  const {
    user = {},
    resource = {},
  } = userInfo;

  const registrationDate = moment(user.createDate).format('MMM YYYY').toString();

  return <div className='profile-header wrapper profile-adapt'>
    <div className="profile-header__container wrapper-container profile-adapt__container pb-10 pt-10">
      <div className='profile-header__content profile-adapt__content d-f jc-c'>
        <div className='profile-header__avatar profile-adapt__avatar'>
            <img
              onError={(e) => e.target.src = PATH.PLACEHOLDER_AVATAR}
              src={resource !== null ? resource.originalUrl : PATH.PLACEHOLDER_AVATAR}
              alt="small"
            />
        </div>
        <div className='profile-header__info profile-adapt__info ml-6 d-f fd-c jc-sb'>
          <span
            className='profile-header__join h6-skyFont fs-14 lh-18 ls-4 fw-500'
          >
            {registrationDate}
          </span>
          <div className='profile-header__member h6-skyFont fs-16 lh-22 ls-5 fw-500'>
            {!user.organizationName ? 'Community member' : 'Council'}
          </div>
          <div className='profile-header__name h2-black fs-24 lh-22 ls-5 fw-600'>{`${user.firstName} ${user.lastName}`}</div>
          <div className='profile-header__location h6-skyFont fs-16 lh-22 ls-5 fw-500'>
            <Icon
              iconName='location_icon'
              className='location_icon mr-3'
            />
            <div className='profile-header__location-text'>
              {user.address}
            </div>
          </div>
          {authData.isAuth && user.id === authData.me.user.id &&
            <NavLink
              to={`/${ROUTES.USER_PROFILE}/${user.id}/edit`}
              className='profile-header__edit h2-black fs-16 lh-22 ls-5 fw-500'
            >
              Edit profile
            </NavLink>
          }
        </div>
      </div>
    </div>
  </div>
};


export default ProfileHeader;