import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import './iconsStyle.sass';

function Icons({ iconName, className }) {

  switch (iconName) {
    case 'shape':
      return (
        <SVG src="../img/header/Shape.svg" className={className} />
      );
    case 'logo':
      return (
        <SVG src="../img/footer/logo-green.svg" className={className} />
      );
    case 'searchProjectIconLg':
      return (
        <SVG src="../img/findProjects/IdeaProjectsLg.svg" className={className} />
      );
    case 'searchProjectIcon':
      return (
        <SVG src="../img/grantsPage/IdeaProjects.svg" className={className} />
      );
    case 'searchGrantsIconLg':
      return(
        <SVG src="../img/grantsPage/IdeaGrantsLg.svg" className={className} />
      );
    case 'searchGrantsIcon':
      return(
        <SVG src="../img/findProjects/IdeaGrants.svg" className={className} />
      );
    case 'searchEventsIcon':
      return (
        <SVG src="../img/findProjects/IdeaEvents.svg" className={className} />
      );
    case 'dropdownCircle':
      return (
        <SVG src="../img/findProjects/dropdown.svg" className={className} />
      );
    case 'squareCheckbox':
      return (
        <SVG src="../img/findProjects/checkbox.svg" className={className} />
      );
    case 'calendar':
      return (
        <SVG src="../img/findProjects/IdeaEvents.svg" className={className} />
      );
    case 'searchEventsIconLg':
      return (
        <SVG src="../img/eventsPage/IdeaEventsLg.svg" className={className} />
      );
    case 'preloader':
      return (
        <SVG src="../img/preloader.svg" className={className} />
      );
    default:
      return (
        <SVG src="../img/icons/plugIcon.svg" className={className} />
      )

  }
}

Icons.propTypes = {
  iconName: PropTypes.string,
  className: PropTypes.string,
};

export default Icons;
