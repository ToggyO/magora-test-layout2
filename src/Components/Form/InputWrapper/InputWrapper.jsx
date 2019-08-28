import React from 'react';
import FormError from '../FormError/FormError';
import s from './InputWrapper.module.sass';


const InputWrapper = (props) => {
  const {
    label,
    error,
    visited,
    inputId,
  } = props;

  return (
    <div className={s.inputWrapper}>
      <label
        htmlFor={inputId}
        className={`${s.inputWrapper_label} ${error && visited ? 'error-label' : null}`}
      >
        {label}
      </label>
      {props.children}
      <FormError
        error={error}
        visited={visited}
      />
    </div>
  );
};


export default InputWrapper;
