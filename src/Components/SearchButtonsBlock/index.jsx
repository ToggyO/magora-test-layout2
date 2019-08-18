import React from "react";
import './style.sass';
import {NavLink} from "react-router-dom";
import Icon from "../../Icons/Icons";


const SearchButtonsBlock = (props) => {

  const {
    projectSearchButton,
    grantsSearchButton,
    eventsSearchButton,
  } = props;

  return (
    <div className={`switchBtns prS-adapt__switchBtns d-f fd-c ai-c jc-sb `}>
      <NavLink to='/projectSearch'>
        <button className={projectSearchButton.className} >
          <Icon
            iconName={projectSearchButton.iconName}
            className={projectSearchButton.iconClassName}
          />
        </button>
        <h6 className={projectSearchButton.headerStyle}>Projects</h6>
      </NavLink>
      <NavLink to='/grantsSearch'>
        <button className={grantsSearchButton.className}>
          <Icon
            iconName={grantsSearchButton.iconName}
            className={grantsSearchButton.iconClassName}
          />
        </button>
        <h6 className={grantsSearchButton.headerStyle}>Grants</h6>
      </NavLink>
      <NavLink to='/eventsSearch'>
        <button className={eventsSearchButton.className}>
          <Icon
            iconName={eventsSearchButton.iconName}
            className={eventsSearchButton.iconClassName}
          />
        </button>
        <h6 className={eventsSearchButton.headerStyle}>Events</h6>
      </NavLink>
    </div>
  )
};

export default SearchButtonsBlock;
