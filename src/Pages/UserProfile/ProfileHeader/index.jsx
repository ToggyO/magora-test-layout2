import React from 'react';
import './style.sass';
import {NavLink} from "react-router-dom";
import Icon from "../../../Icons/Icons";
import moment from 'moment';


// const placeholderImage = 'img/placeholder-image.jpg';
const placeholderAvatar = '/img/avatar-placeholder.png';


const ProfileHeader = (props) => {

  const {
    // about,
    address,
    createDate,
    firstName,
    lastName,
    organizationName,
  } = props.userInfo;

  const registrationDate = moment(createDate).format('MMM YYYY').toString();

  return <div className='profile-header wrapper'>
    <div className="profile-header__container wrapper-container pb-10 pt-10">
      <div className='profile-header__content d-f jc-c'>
        <div className='profile-header__avatar'>
          <img
            // onError={(e) => e.target.src = placeholderAvatar}
            src={ placeholderAvatar }
            alt="avatar.jpeg"
          />
        </div>
        <div className='profile-header__info ml-6 d-f fd-c jc-sb'>
          <span
            className='profile-header__join h6-skyFont fs-14 lh-18 ls-4 fw-500'
          >
            {registrationDate}
          </span>
          <div className='profile-header__member h6-skyFont fs-16 lh-22 ls-5 fw-500'>
            {!organizationName ? 'Community member' : 'Council'}
          </div>
          <div className='profile-header__name h2-black fs-24 lh-22 ls-5 fw-600'>{`${firstName} ${lastName}`}</div>
          <div className='profile-header__location h6-skyFont fs-16 lh-22 ls-5 fw-500'>
            <div>
              <span className='mr-3'>
              <Icon
                iconName='location_icon'
                className='mr-1'
              />
            </span>
              {address}
            </div>
          </div>
          <NavLink
            to='./#'
            className='profile-header__edit h2-black fs-16 lh-22 ls-5 fw-500'
          >
            Edit profile
          </NavLink>
        </div>
      </div>
    </div>
  </div>
};


export default ProfileHeader;