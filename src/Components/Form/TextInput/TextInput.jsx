import React from 'react';
import s from './TextInput.module.sass';
import '../FormComponentsStyle.sass';
import InputWrapper from "../InputWrapper/InputWrapper";


const TextInput = (props) => {

  const { label, type, placeholder, name, onChange, onBlur, error, visited, style, value } = props;

  const inputId = `input-${name}`;

  return (
    <div className={s.inputBlock}>
      <InputWrapper label={label} error={error} visited={visited} inputId={inputId}>
        <div className={`${s.inputBlock_texInput} ${error && visited ? 'error' : null}`}>
          <input
            id={inputId}
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            style={style}
          />
        </div>
      </InputWrapper>
    </div>
  )
};


export default TextInput;