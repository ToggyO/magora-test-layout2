import React from "react";
import s from './InputWrapper.module.sass';
import ReduxFormError from "../ReduxFormError/FormError";
import PropTypes from 'prop-types';


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


ReduxFormInputWrapper.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool,
  inputId: PropTypes.string,
}
