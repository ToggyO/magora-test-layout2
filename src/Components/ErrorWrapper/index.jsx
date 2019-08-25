import React from 'react';
import './style.sass';


const ErrorWrapper = (props) => {

  const { error } = props;

  return <div>
    { error
      ? <button>Something wrong</button>
      : props.children
    }
  </div>
};


export default ErrorWrapper;