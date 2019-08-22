import React, {useState} from 'react';
import './style.sass';
import Tab from "./Tab";
import {tabTitles} from './Tab/tabsInfo';


const ProfileNavigation = (props) => {

  const { userProfileData, userId } = props;

  const [ active, toggleActive ] = useState(0);

  return <div className='profile-navigation wrapper'>
      <ul className='profile-navigation__list navigation-list d-f jc-c'>

        {tabTitles.map((item, i) => <Tab
            key={i}
            keyNumber={i}
            title={item.title}
            value={item.value}
            active={active}
            toggleActive={toggleActive}
            tabTitles={tabTitles}
            userId={userId}
            span={<div className='navigation-list__count'>
              <span className='h2-black fs-12 lh-3 fw-500'>
                {item.value !== 'about' ? userProfileData[item.value].total : 0 }
              </span>
            </div>}
          />
        )}

      </ul>
  </div>
};


export default ProfileNavigation;


// {tabTitles.map((item, i) => <Tab
//     key={i}
//     keyNumber={i}
//     title={item.title}
//     value={item.value}
//     active={active}
//     toggleActive={toggleActive}
//     tabTitles={tabTitles}
//     location={location}
//     span={<div className='navigation-list__count'>
//               <span className='h2-black fs-12 lh-3 fw-500'>
//                 {item.value !== 'about' ? userProfileData[item.value].total : 0 }
//               </span>
//     </div>}
//   />
// )}