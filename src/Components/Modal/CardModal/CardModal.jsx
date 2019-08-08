import React from 'react';
import './CardModal.sass';
import {modalOpen} from "../../../Store/Actions/projectSearchPage/actionModal";
import {connect} from "react-redux";


const CardModal = (props) => {

  const onCardOpenModal = (modalKey) => {
    let options = props.card;
    props.openModal(modalKey, options);
  };

  return (
    <div className="cardModal mb-16" onClick={() => onCardOpenModal('pos-card')}>
      <div className="cardModal-container d-f fd-c">
        <img className="cardModal-container__image mb-9" src={props.card.url} alt=""/>
        <h3
          className='cardModal-container__headline fs-30 lh-41 ls-5 fw-700 h2-black'
        >
          {props.card.label}
        </h3>
        <p className="cardModal-container__text h2-black fs-20 lh-30 ls-2 fw-500">The petitioning
          tool is used to collect the signatures of community members
          who want to appeal to their local council or a local
          business about a particular cause or change.
        </p>
      </div>
      <div className="cardModal-container__btn">
        <button className='btn green lg fs-18 ls-27 lh-18 fw-600'>Create idea</button>
      </div>
    </div>
  );
};

let mapStateToProps = ( {modalState} ) => ( {modalState,} ) ;

let mapDispatchToProps = (dispatch) => {
  return {
    openModal: (modalKey, options) => {
      dispatch( modalOpen(modalKey, options) );
    }
  }
};

export default connect( mapStateToProps, mapDispatchToProps )(CardModal);


