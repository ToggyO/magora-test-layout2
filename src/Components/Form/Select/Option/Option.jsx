import React from 'react';
import s from './Option.module.css';

const Option = (props) => {
  return (
    <option value={props.value} >{props.title}</option>
  );

};

export default Option;

