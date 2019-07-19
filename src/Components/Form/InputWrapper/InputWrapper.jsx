import React from "react";
import FormError from "../FormError/FormError";
import s from './InputWrapper.module.sass';


const InputWrapper = (props) => {
  return (
    <div className={s.inputWrapper}>
      <label
        htmlFor="form-password__block"
        className={`${s.inputWrapper_label} ${ props.error && props.visited ? 'error-label' : null }`}
      >
        {props.label}
      </label>
      {props.children}
      <FormError
        error={props.error}
        visited={props.visited}
      />
    </div>
  );
};


export default InputWrapper;