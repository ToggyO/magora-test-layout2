import React from 'react';
import s from './Modal.module.sass';
import Form from '../Form/Form';
import {connect} from "react-redux";
import { modalClose } from "../../Store/Actions/actionModal";



class Modal extends React.Component {

  componentDidUpdate(prevProps) {
    if (this.props.modalState.isOpen !== prevProps.modalState.isOpen) {

      if (this.props.modalState.isOpen) {
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
        this.props.onModalClose();
      }
    }
  };

  render() {

    const { isOpen } = this.props.modalState;

    if (!isOpen) return null;

    return (
      <div className={`${s.overlay} wrapper`} onClick={ this.onClickEnvironmentModalClose } id="modal-overlay">
        <div className={s.modalWindow}>
          <div className={`${s.modalContainer}`}>
            <Form />
          </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps = ({ modalState }) => ( {modalState,} );

let mapDispatchToProps = (dispatch) => {
  return {
    onModalClose: () => {
      dispatch( modalClose() );
    }
  }
};

export default connect( mapStateToProps, mapDispatchToProps )(Modal);
