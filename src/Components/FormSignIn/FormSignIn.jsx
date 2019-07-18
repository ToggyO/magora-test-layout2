import React from 'react';
import './FormSignIn.sass';
import TextInput from './TextInput/TextInput';
import InputPass from "./InputPass/InputPass";
import { connect } from "react-redux";
import { modalOpen } from "../../Store/Actions/actionModal";
import { bindActionCreators } from "redux";


class FormSignIn extends React.Component {
  render() {

    // const { isReg } = this.props.formState;
    // const { modalKey } = this.props.modalState;
    // debugger;
    return (
      <div className="main-form" style={{maxWidth: '500px', minWidth: '460px'}}>
        <div className="main-form__headline">
          <h2 className='h2-black fs-24 lh-30 ls-3 fw-700 mb-10'>
            Sign in to share ideas and support others
          </h2>
        </div>
        <form action="" className='form'>

          <TextInput placeholder={'First name'}/>
          <TextInput placeholder={'Last name'}/>

          <div className='form-password'>
            <label htmlFor="">
              Password:
            </label>
            <div className='form-password__block'>
              <InputPass placeholder={'Enter password'} name={'password'} style={ { width: '100%' } }/>
            </div>
            <a href="./#" style={ { width: '100%' } }>
              Forgot Password
            </a>
          </div>

          <p className='form-license'>
            Business or local council?
            <a href="./#">
              Click here.
            </a>
          </p>

          <div className='fBtn-adapt form-button__create'>
            <button
              type='button'
              className='btn green sm-wide fs-16 lh-22 ls-24 fw-700'
            >
              Log in
            </button>
          </div>
          {/*onClick={ modalKey ? this.onSwitchForm : () => this.props.openModal('signInModal')}*/}
          <div className='fBtn-adapt form-button__login' >
            <button
              type='button'
              className='btn transparent sm-wide fs-16 lh-17 ls-24 fw-600'
              onClick={ () => this.props.modalOpen('signUnModal', { aaa: 'aaa' }) }
            >
              Create account
            </button>
          </div>

        </form>
      </div>
    );
  };
};

let mapStateToProps = ({ formState, modalState }) => ( { formState, modalState} );

let mapDispatchToProps = (dispatch) => {
  return {
    modalOpen: bindActionCreators(modalOpen, dispatch)
  }
};
//
// let mapDispatchToProps = (dispatch) => {
//   return {
//     // modalOpen: function () { dispatch(modalOpen.apply(this, arguments)); }
//     modalOpen: bindActionCreators2(ModalActions, dispatch),
//   }
// };

export default connect( mapStateToProps, mapDispatchToProps )(FormSignIn)



//feature
// function bindActionCreators2(bindedFunction, dispatch) {
//
//   console.log(bindedFunction);
//
//   return function () {
//     dispatch(bindedFunction.apply(this, arguments));
//   }
// }