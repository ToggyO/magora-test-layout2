import React from 'react';
import { connect } from 'react-redux';
import './Card.sass';
import { modalOpen } from '../../../../../Store/Actions/modal/actionModal';
import Icon from '../../../../../Icons/Icons';


const Card = (props) => {
  const onCardOpenModal = (modalKey) => {
    const options = props.card;
    props.openModal(modalKey, options);
  };

  return (
    <div className="card mb-16" onClick={() => onCardOpenModal('pos-card')}>
      <div className="card-container d-f fd-c">
        <div className="card-icon d-f jc-c mb-9">
          <Icon iconName={props.card.url} />
        </div>
        {/* <img className="card-container__image mb-9" src={props.card.url} alt=""/> */}
        <h3
          className="card-container__headline fs-30 lh-41 ls-5 fw-700 h3-seaWave t-align-c"
        >
          {props.card.label}
        </h3>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  openModal: (modalKey, options) => {
    dispatch(modalOpen(modalKey, options));
  },
});

export default connect(null, mapDispatchToProps)(Card);
