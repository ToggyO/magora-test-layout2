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

  const onTabChange = (tab) => {
    toggleActive(keyNumber);
    // const queries = parse(location.search, { ignoreQueryPrefix: true }) || {};
    // queries.tab = tab;
    // history.push(`${location.pathname}?${stringify(queries)}`);
  };

  return <li
    className={`navigation-list__item ${active === keyNumber ? 'activeTab' : ''}`}
    onClick={() => onTabChange(value)}
  >
    <NavLink
      to={`/${ROUTES.USER_PROFILE}/${userId}${value !== 'about' ? `/${value}` : ''}`}
      className='navigation-list__link'
    >
      <div className='navigation-list__article'>
        <span className='h2-black fs-18 lh-22 ls-4 fw-600'>{title}</span>
      </div>
      {!(keyNumber === 0) ? span : null}
    </NavLink>
  </li>
};

export default Tab;
