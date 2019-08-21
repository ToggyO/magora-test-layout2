import React from 'react';
import './style.sass';
import history from "../../../../history";
import {parse, stringify} from "qs";


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
    const queries = parse(location.search, { ignoreQueryPrefix: true }) || {};
    queries.tab = tab;
    history.push(`${location.pathname}?${stringify(queries)}`);
  };

  return <li
    className={`navigation-list__item ${active === keyNumber ? 'activeTab' : ''}`}
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
  </li>
};

export default Tab;
