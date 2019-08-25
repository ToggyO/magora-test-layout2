import React from 'react';
import './style.sass';
import {NavLink} from "react-router-dom";
import Icon from "../../../Icons/Icons";
import moment from 'moment';
import {getFromLocalState} from "../../../Libs/localStorage";


const ProfileHeader = (props) => {

  const {
    user,
    resource,
  } = props.userInfo;

  const { authData } = props;

  const registrationDate = moment(user.createDate).format('MMM YYYY').toString();

  return <div className='profile-header wrapper'>
    <div className="profile-header__container wrapper-container pb-10 pt-10">
      <div className='profile-header__content d-f jc-c'>
        <div className='profile-header__avatar'>

          { resource !== null
            ?  <img
              // onError={(e) => e.target.src = placeholderAvatar}
              src={resource.originalUrl}
              alt="small"
            />
            : <Icon iconName='avatar' className='avatar_profile' />
          }
        </div>
        <div className='profile-header__info ml-6 d-f fd-c jc-sb'>
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
          {authData.isAuth && user.id === getFromLocalState('USER_INFO').user.id &&
            <NavLink
              to='./#'
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