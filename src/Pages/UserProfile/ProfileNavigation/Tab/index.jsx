import React from 'react';
import './style.sass';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../../Constants';
import { parseRouteString } from '../../../../Libs/HelperFunctions';


const Tab = (props) => {
  const {
    keyNumber,
    title,
    value,
    toggleActive,
    active,
    span,
    userId,
    tabQuery,
    pushTabQuery,
    location,
  } = props;
  /* eslint-disable no-shadow */
  const setLocationSearchToState = (location, key) => {
    pushTabQuery(tabQuery => ({ ...tabQuery, [key]: location }));
  };


  const onTabChange = (value) => {
    toggleActive(value);
    setLocationSearchToState(location.search, parseRouteString(location.pathname));
  };


  return <NavLink
      to={`/${ROUTES.USER_PROFILE}/${userId}/${value}${tabQuery && tabQuery[value]}`}
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
  </NavLink>;
};


export default Tab;
