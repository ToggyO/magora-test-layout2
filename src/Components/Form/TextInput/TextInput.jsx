import React from 'react';
import s from './TextInput.module.sass';
import '../FormComponentsStyle.sass';


const TextInput = (props) => {

  const { placeholder, name, value, onChange, onBlur } = props;

  return (
    <div className={s.inputBlock}>
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
};


export default TextInput;