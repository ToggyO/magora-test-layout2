import React from 'react';
import './Card.sass';
import {modalOpen} from "../../../../../Store/Actions/projectSearchPage/actionModal";
import {connect} from "react-redux";


const Card = (props) => {

  const onCardOpenModal = (modalKey) => {
    let options = props.card;
    props.openModal(modalKey, options);
  };

  return (
    <div className="card mb-16" onClick={() => onCardOpenModal('pos-card')}>
      <div className="card-container d-f fd-c">
        <img className="card-container__image mb-9" src={props.card.url} alt=""/>
        <h3
          className='card-container__headline fs-30 lh-41 ls-5 fw-700 h3-seaWave t-align-c'
        >
          {props.card.label}
        </h3>
      </div>
    </div>
  );
};

let mapDispatchToProps = (dispatch) => {
  return {
    openModal: (modalKey, options) => {
      dispatch( modalOpen(modalKey, options) );
    }
  }
};

export default connect( null, mapDispatchToProps )(Card);


