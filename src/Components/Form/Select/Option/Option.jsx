import React from 'react';
import s from './Option.module.sass';

const Option = (props) => {
  return (
    <option className={s.option} value={props.value} >{props.title}</option>
  );

};

export default Option;

