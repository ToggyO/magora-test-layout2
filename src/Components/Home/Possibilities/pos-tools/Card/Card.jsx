import React from 'react';
import './Card.sass';


const Card = (props) => {

  return (

    <div className="card mb-16">
      <div className="card-container d-f fd-c">
        <img className="card-container__image mb-9" src={props.url} alt=""/>
        <h3 className="card-container__headline h3-seaWave fs-30 lh-41 ls-5 fw-700">{props.label}</h3>
      </div>
    </div>
  );
}

export default Card;