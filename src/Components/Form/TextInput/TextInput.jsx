import React from 'react';
import s from './TextInput.module.sass';
import '../FormComponentsStyle.sass';
import InputWrapper from "../InputWrapper/InputWrapper";


const TextInput = (props) => {

  const { label, type, placeholder, name, value, onChange, onBlur, error, visited, style } = props;

  return (
    <div className={s.inputBlock}>
      <InputWrapper label={label} error={error} visited={visited}>
        <input
          className={ error && visited ? 'error' : null }
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          style={style}
        />
      </InputWrapper>
    </div>
  )
};


export default TextInput;