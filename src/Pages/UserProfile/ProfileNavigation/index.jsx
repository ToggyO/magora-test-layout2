import React, {useState} from 'react';
import './style.sass';
import Tab from "./Tab";
import {tabTitles} from './Tab/tabsInfo';


const ProfileNavigation = (props) => {

  const { location } = props;

  const [ active, toggleActive ] = useState(0);

  let tabs = [];
  for(let i = 0; i < tabTitles.length; i++) {
    let tab = <Tab
      key={i}
      keyNumber={i}
      title={tabTitles[i]}
      toggleActive={toggleActive}
      active={active}
      tabTitles={tabTitles}
      location={location}
      span={<div className='navigation-list__count'>
        <span className='h2-black fs-12 lh-3 fw-500'>0</span>
      </div>}
    />;
    tabs.push(tab);
  }

  return <div className='profile-navigation wrapper'>
      <ul className='profile-navigation__list navigation-list d-f jc-c'>

        {tabs}

      </ul>
  </div>
};


export default ProfileNavigation;