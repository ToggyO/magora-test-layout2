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
    case 'searchProjectIcon':
      return (
        <SVG src="../img/findProjects/IdeaProjects.svg" className={className} />
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
    case 'edit':
      return (
        <SVG src="../img/admin/edit.svg" className={className} />
      );
    case 'delete':
      return (
        <SVG src="../img/admin/del.svg" className={className} />
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
