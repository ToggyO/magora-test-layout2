import React, { useState } from 'react';
import './style.sass';
import Tab from './Tab';
import { tabTitles } from './Tab/tabsInfo';


const ProfileNavigationEmpty = (props) => {
  const { location } = props;

  const [active, toggleActive] = useState(0);

  // let tabs = [];
  // for(let i = 0; i < tabTitles.length; i++) {
  //   let tab = <Tab
  //     key={i}
  //     keyNumber={i}
  //     title={tabTitles[i]}
  //     toggleActive={toggleActive}
  //     active={active}
  //     tabTitles={tabTitles}
  //     span={<div className='navigation-list__count'>
  //       <span className='h2-black fs-12 lh-3 fw-500'>0</span>
  //     </div>}
  //   />;
  //   tabs.push(tab);
  // }

  return <div className='profile-navigation wrapper'>
    <div className='profile-navigation__container wrapper-container d-f jc-c'>
      <ul className='profile-navigation__list navigation-list d-f'>

        {tabTitles.map((item, i) => <Tab
              key={i}
              keyNumber={i}
              title={item.title}
              value={item.value}
              active={active}
              toggleActive={toggleActive}
              tabTitles={tabTitles}
              location={location}
              span={<div className='navigation-list__count'>
                <span className='h2-black fs-12 lh-3 fw-500'>0</span>
              </div>}
            />)
        }
      </ul>
    </div>
  </div>;
};


export default ProfileNavigationEmpty;
