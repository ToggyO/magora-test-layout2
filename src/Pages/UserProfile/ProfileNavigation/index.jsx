import React, {useState} from 'react';
import './style.sass';
import Tab from "./Tab";
import {tabTitles} from './Tab/tabsInfo';
import {parseRouteString} from "../../../Libs/additionalSortingFunctions";
import SimpleSlider from "../../../Components/ReactSlider";


const ProfileNavigation = (props) => {

  const { userProfileData, userId, location, tabQuery , pushTabQuery } = props;

  const queries = parseRouteString(location.pathname) || {};

  const [ active, toggleActive ] = useState(queries);


  return <div className='profile-navigation wrapper'>
      <div className='profile-navigation__list navigation-list d-f jc-c'>

        {tabTitles.map((item, i) => <Tab
            key={i}
            keyNumber={i}
            title={item.title}
            value={item.value}
            active={active}
            toggleActive={toggleActive}
            tabTitles={tabTitles}
            userId={userId}
            tabQuery={tabQuery}
            pushTabQuery={pushTabQuery}
            location={location}
            span={<div className='navigation-list__count'>
              <span className='h2-black fs-12 lh-3 fw-500'>
                {item.value !== 'about' ? userProfileData[item.value].total : 0 }
              </span>
            </div>}
          />
        )}

      </div>
    {/*<SimpleSlider />*/}
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