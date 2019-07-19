import React from 'react';
import s from './Modal.module.sass';
import FormSignIn from '../Form/FormSignIn/FormSignIn';
import CardModal from "./CardModal/CardModal";
import FormSignUp from "../Form/FormSignUp/FormSignUp";
import { connect } from "react-redux";
import { modalClose } from "../../Store/Actions/actionModal";
import { bindActionCreators } from "redux";


class Modal extends React.Component {

  componentDidUpdate(prevProps) {
    if (this.props.modalState.modalKey !== prevProps.modalState.modalKey) {

      if (this.props.modalState.modalKey) {
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '17px'
      } else {
        document.body.style.overflow = 'scroll ';
        document.body.style.paddingRight = '0'
      }

    }
  };

  onClickEnvironmentModalClose = (e) => {
    const _id = e.target.id;
    if (_id ) {
      if ( _id  === "modal-overlay" ) {
        this.props.modalClose();
      }
    }
  };

  onRenderModalContent = () => {
    let { modalKey, options } = this.props.modalState;
    switch (modalKey) {
      case 'signInModal':
        return <FormSignIn />;
      case 'signUnModal':
        return <FormSignUp />;
      case 'pos-card':
        return <CardModal card={options} />;
      default:
        return null;
    }
  };

  render() {

    const { modalKey } = this.props.modalState;

    if (!modalKey) return null;

    return (
      <div className={`${s.overlay} wrapper`} onClick={ this.onClickEnvironmentModalClose } id="modal-overlay">
        <div className={`${s.modalWindow} d-f jc-c`}>
          <div className={`${s.modalContainer}`}>
            {this.onRenderModalContent()}
          </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps = ({ modalState }) => ( {modalState,} );

let mapDispatchToProps = (dispatch) => {
  return {
    modalClose: bindActionCreators(modalClose, dispatch)
  }
};

export default connect( mapStateToProps, mapDispatchToProps )(Modal);
