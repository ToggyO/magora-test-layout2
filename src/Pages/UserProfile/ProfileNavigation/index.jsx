import React, { useState } from 'react';
import ScrollArea from 'react-scrollbar';
import 'react-scrollbar/dist/styles.css';
import './style.sass';
import Tab from './Tab';
import { tabTitles } from './Tab/tabsInfo';
import { parseRouteString } from '../../../Libs/HelperFunctions';
// import ScrollArea from 'react-scrollbar/src/js/ScrollArea';


const ProfileNavigation = (props) => {
  const {
    userProfileData,
    userId,
    location,
    tabQuery,
    pushTabQuery,
  } = props;

  const queries = parseRouteString(location.pathname) || {};

  const [active, toggleActive] = useState(queries);


  return <div className="profile-navigation wrapper">
      <div className="profile-navigation__list navigation-list d-f jc-c">
        <ScrollArea
          speed={0.8}
          className="area"
          contentClassName="content"
          contentStyle={{ display: 'flex' }}
        >
          {tabTitles.map((item, i) => <Tab
            key={i}
            keyNumber={i}
            title={item.title}
            value={item.value }
            active={active}
            toggleActive={toggleActive}
            tabTitles={tabTitles}
            userId={userId}
            tabQuery={tabQuery}
            pushTabQuery={pushTabQuery}
            location={location}
            span={<div className="navigation-list__count" >
              <span className="h2-black fs-12 lh-3 fw-500">
                {item.value !== 'about' ? userProfileData[item.value].total : 0 }
             </span>
            </div>}
          />)
          }
        </ScrollArea>


      </div>
  </div>;
};

export default ProfileNavigation;
