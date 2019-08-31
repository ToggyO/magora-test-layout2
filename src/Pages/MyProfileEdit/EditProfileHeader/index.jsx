import React from 'react';
import { Link } from 'react-router-dom';
import './style.sass';
import Icons from '../../../Icons/Icons';
import { KEYWORD, ROUTES } from '../../../Constants';


const EditProfileHeader = (props) => {
  const { user = {} } = props;
  return (
    <div className="edit-profile-header wrapper">
      <div className="edit-profile-header__container wrapper-container d-f">
        <div className="edit-profile-header__account">
          <h6 className="h2-black lh-42 fs-42 fw-700">
            Account details
          </h6>
        </div>
        <div className="edit-profile-header__back">
          <Link to={`/${ROUTES.USER_PROFILE}/${user.id}/${KEYWORD.ABOUT}`}>
            <button className="btn d-f ai-c">
              <Icons iconName="arrow_back" className="back_to_profile mr-3"/>
              <span className="fs-16 ls-24 lh-22 fw-600">Back to profile</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default EditProfileHeader;
