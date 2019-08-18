import React from 'react';
import s from './Option.module.sass';
import PropTypes from 'prop-types';


const Option = (props) => {

  const { value, title } = props;

  return (
    <option className={s.option} value={value} >{title}</option>
  );

};

export default Option;


Option.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
}
