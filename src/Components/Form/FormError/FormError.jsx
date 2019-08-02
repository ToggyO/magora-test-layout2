import React from 'react';
import s from './FormError.module.sass';


const FormError = ({ error, visited }) => {

  // const  = props;

  if (error && visited) {
    return (
      <div className={s.form_error}>
        {error}
      </div>
    );
  }
  // debugger;

  return null;

};

export default FormError;