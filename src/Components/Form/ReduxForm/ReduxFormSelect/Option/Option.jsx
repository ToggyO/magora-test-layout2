import React from 'react';
import PropTypes from 'prop-types';
import s from './Option.module.sass';


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
};
