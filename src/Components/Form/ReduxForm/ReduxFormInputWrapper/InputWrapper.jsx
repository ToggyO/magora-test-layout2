import React from 'react';
import PropTypes from 'prop-types';
import s from './InputWrapper.module.sass';
import ReduxFormError from '../ReduxFormError/FormError';


const ReduxFormInputWrapper = (props) => {
  const {
    label,
    error,
    touched,
    inputId,
    isRequired,
    style,
  } = props;

  return (
    <div className={s.inputWrapper} style={style}>
      <label
        htmlFor={inputId}
        className={`${s.inputWrapper_label} ${error && touched ? 'error-label' : null}`}
      >
        {label}
        {isRequired && <span className={s.requireStar}></span>}
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
};
