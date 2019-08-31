import React from 'react';
import './style.sass';
import { NavLink } from 'react-router-dom';
import Icon from '../../../Icons/Icons';


const ProfileHeaderEmpty = () => (
 <div className="profile-header wrapper">
    <div className="profile-header__container wrapper-container pb-10 pt-10">
      <div className="profile-header__content d-f jc-c">
        <div className="profile-header__avatar">
        </div>
        <div className="profile-header__info ml-6 d-f fd-c jc-sb">
          <span
            className="profile-header__join h6-skyFont fs-14 lh-18 ls-4 fw-500"
          >
            Date
          </span>
          <div className="profile-header__member h6-skyFont fs-16 lh-22 ls-5 fw-500">
            Member
          </div>
          <div className="profile-header__name h2-black fs-24 lh-22 ls-5 fw-600">firstName lastName</div>
          <div className="profile-header__location h6-skyFont fs-16 lh-22 ls-5 fw-500">
            <span className="mr-3">
              <Icon
                iconName="location_icon"
                className="mr-1"
              />
            </span>
            LOCATION
          </div>
          <NavLink
            to="./#"
            className="profile-header__edit h2-black fs-16 lh-22 ls-5 fw-500"
          >
            Edit profile
          </NavLink>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileHeaderEmpty;
