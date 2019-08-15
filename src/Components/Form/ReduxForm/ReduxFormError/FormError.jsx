import React from 'react';
import s from './FormError.module.sass';


const ReduxFormError = (props) => {

  const { error, touched } = props;

  if (error && touched) {
    return (
      <div className={s.form_error}>
        {error}
      </div>
    );
  }
  return null;
};

export default ReduxFormError;