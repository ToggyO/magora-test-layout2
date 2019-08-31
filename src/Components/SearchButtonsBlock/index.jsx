import React from 'react';
import './style.sass';
import { NavLink } from 'react-router-dom';
import Icon from '../../Icons/Icons';
import { ROUTES } from '../../Constants';


const SearchButtonsBlock = (props) => {
  const {
    projectSearchButton,
    grantsSearchButton,
    eventsSearchButton,
  } = props;

  return (
    <div className="switchBtns prS-adapt__switchBtns d-f fd-c ai-c jc-sb">
      <NavLink to={`/${ROUTES.PROJECT_SEARCH}`}>
        <button className={projectSearchButton.className} >
          <Icon
            iconName={projectSearchButton.iconName}
            className={projectSearchButton.iconClassName}
          />
        </button>
        <h6 className={projectSearchButton.headerStyle}>Projects</h6>
      </NavLink>
      <NavLink to={`/${ROUTES.GRANTS_SEARCH}`}>
        <button className={grantsSearchButton.className}>
          <Icon
            iconName={grantsSearchButton.iconName}
            className={grantsSearchButton.iconClassName}
          />
        </button>
        <h6 className={grantsSearchButton.headerStyle}>Grants</h6>
      </NavLink>
      <NavLink to={`/${ROUTES.EVENTS_SEARCH}`}>
        <button className={eventsSearchButton.className}>
          <Icon
            iconName={eventsSearchButton.iconName}
            className={eventsSearchButton.iconClassName}
          />
        </button>
        <h6 className={eventsSearchButton.headerStyle}>Events</h6>
      </NavLink>
    </div>
  );
};

export default SearchButtonsBlock;
