import React from 'react';
import '../../../Pages/UserProfile/ProfileNavigation/Tab/style.sass';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../Constants';
import { parseRouteString } from '../../../Libs/HelperFunctions';


const MenuItem = (props) => {
  const {
    userId,
    tabQuery,
    activeTab,
    title,
    value,
    location,
    toggleActiveTab,
    pushTabQuery,
  } = props;

  /* eslint-disable no-shadow */
  const setLocationSearchToState = (loc, key) => {
    pushTabQuery(tabQuery => ({ ...tabQuery, [key]: loc }));
  };

  const onTabChange = () => {
    toggleActiveTab(value);
    setLocationSearchToState(location.search, parseRouteString(location.pathname));
  };

  return (
    <NavLink
      to={`/${ROUTES.USER_PROFILE}/${userId}/${value}${tabQuery && tabQuery[value]}`}
      // className="navigation-list__item"
      className={`navigation-list__item ${activeTab === value ? 'activeTab' : ''}`}
      onClick={() => onTabChange(value)}
    >
      <div
        className='navigation-list__link'
      >
        <div className='navigation-list__article'>
          <span className='h2-black fs-18 lh-22 ls-4 fw-600'>{title}</span>
        </div>
        {/* {!(props.keyNumber === 0) ? span : null} */}
      </div>
    </NavLink>
  );
};

export default MenuItem;

// <div className={`menu-item ${selected ? 'active' : ''}`}>{text}</div>;
