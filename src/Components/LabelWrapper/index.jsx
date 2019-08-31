import React from 'react';
import './style.sass';

const LabelWrapper = props => {
  const {
    label,
    children,
    description,
  } = props;
  return (
    <div className="label-wrapper">
      <div className="label-wrapper__headline">
        <h6>{label}</h6>
        <p>{description}</p>
      </div>
      <div className="label-wrapper__container">
        {children}
      </div>
    </div>
  );
};


export default LabelWrapper;
