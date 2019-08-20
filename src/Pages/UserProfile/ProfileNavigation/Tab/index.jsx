import React from 'react';
import './style.sass';
// import {NavLink} from "react-router-dom";
import {tabTitles} from "./tabsInfo";
import history from "../../../../history";
import {makeQueryString} from "../../../../Libs/additionalSortingFunctions";
import {stringify} from "qs";


const Tab = (props) => {

  const {
    keyNumber,
    title,
    toggleActive,
    active,
    span,
    location
  } = props;

  return <li
    className={`navigation-list__item ${active === keyNumber ? 'activeTab' : ''}`}
    onClick={() => {
      toggleActive(keyNumber);
      // history.push(`${location.pathname}?${stringify(queries)}`);
    }}
  >
    <div
      className='navigation-list__link'
    >
      <div className='navigation-list__article'>
        <span className='h2-black fs-18 lh-22 ls-4 fw-600'>{title}</span>
      </div>
      {!(keyNumber === 0) && !(keyNumber ===  tabTitles.length-1) ? span : null}
    </div>
  </li>
};

export default Tab;
