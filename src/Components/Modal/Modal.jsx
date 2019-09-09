import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import s from './Modal.module.sass';
import CardModal from './CardModal/CardModal';
import { modalClose } from '../../Store/Actions/modal/actionModal';
import RegistrationForm from '../Form/ReduxForm/RegistrationForm';
import AuthForm from '../Form/ReduxForm/AuthForm';
import { RegistrationSuccess } from './RegistrationSuccess';
import AvatarCropper from '../ReactCropper';


/* eslint-disable */
class Modal extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.modalState.modalKey !== prevProps.modalState.modalKey) {

      if (this.props.modalState.modalKey) {
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '17px';
      } else {
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '0';
      }
    }
  }

  onClickEnvironmentModalClose = (e) => {
    const _id = e.target.id;
    if (_id && _id === 'modal-overlay') {
      this.props.modalClose();
    }
  };

  onRenderModalContent = () => {
    const { modalKey, options } = this.props.modalState;
    debugger;
    switch (modalKey) {
      case 'signInModal':
        return <AuthForm />;
      case 'signUpModal':
        return <RegistrationForm />;
      case 'pos-card':
        return <CardModal card={options} />;
      case 'regSuccess':
        return <RegistrationSuccess />;
      case 'cropper-preview':
        return <AvatarCropper
                  loadedFile={options.loadedImage}
                  loadImage={options.loadImage}
                  croppedImage={options.croppedImage}
                  setCroppedImage={options.setCroppedImage}
                />;
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
    );
  }
}

const mapStateToProps = ({ modalState }) => ({ modalState });

const mapDispatchToProps = (dispatch) => ({
  modalClose: bindActionCreators(modalClose, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
