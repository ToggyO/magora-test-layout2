import React from 'react';
import './style.sass';
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../../../Constants";


const Tab = (props) => {

  const {
    keyNumber,
    title,
    value,
    toggleActive,
    active,
    span,
    userId
  } = props;

  const onTabChange = (value) => {
    toggleActive(value);
  };

  return <NavLink
      to={`/${ROUTES.USER_PROFILE}/${userId}/${value}`}
      className={`navigation-list__item ${active === value ? 'activeTab' : ''}`}
      onClick={() => onTabChange(value)}
    >
    <div
      className='navigation-list__link'
    >
      <div className='navigation-list__article'>
        <span className='h2-black fs-18 lh-22 ls-4 fw-600'>{title}</span>
      </div>
      {!(keyNumber === 0) ? span : null}
    </div>
  </NavLink>
};

export default Tab;
