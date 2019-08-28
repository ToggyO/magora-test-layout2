import React from 'react';
import s from './FormError.module.sass';


const FormError = (props) => {
  // const { error, visited } = props;
  if (props.error && props.visited) {
    return (
      <div className={s.form_error}>
        {props.error}
      </div>
    );
  }
  return null;
};

export default FormError;
