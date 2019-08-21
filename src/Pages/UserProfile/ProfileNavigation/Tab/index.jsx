import React from 'react';
import './style.sass';
import history from "../../../../history";
import {parse, stringify} from "qs";
import {NavLink} from "react-router-dom";
import {KEYWORD, ROUTES} from "../../../../Constants";
import {parseRouteString} from "../../../../Libs/additionalSortingFunctions";


const Tab = (props) => {

  const {
    keyNumber,
    title,
    value,
    toggleActive,
    active,
    span,
    location
  } = props;

  const onTabChange = (tab) => {
    toggleActive(keyNumber);
    // const queries = parse(location.search, { ignoreQueryPrefix: true }) || {};
    // queries.tab = tab;
    // history.push(`${location.pathname}?${stringify(queries)}`);
  };
  console.log(`/${ROUTES.USER_PROFILE}/${parseRouteString(location.pathname)}?tab=${value}`);
  return <li
    className={`navigation-list__item ${active === keyNumber ? 'activeTab' : ''}`}
    onClick={() => onTabChange(value)}
  >
    <NavLink
      to={`/${ROUTES.USER_PROFILE}/${parseRouteString(location.pathname)}?tab=${value}`}
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
