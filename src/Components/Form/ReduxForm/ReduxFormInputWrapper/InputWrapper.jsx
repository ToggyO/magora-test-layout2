import React from "react";
import s from './InputWrapper.module.sass';
import ReduxFormError from "../ReduxFormError/FormError";


const ReduxFormInputWrapper = (props) => {

  const { label, error, touched, inputId } = props;
// debugger;
  return (
    <div className={s.inputWrapper}>
      <label
        htmlFor={inputId}
        className={`${s.inputWrapper_label} ${ error && touched ? 'error-label' : null }`}
      >
        {label}
      </label>
      {props.children}
      <ReduxFormError
        error={error}
        touched={touched}
      />
    </div>
  );
};


export default ReduxFormInputWrapper;