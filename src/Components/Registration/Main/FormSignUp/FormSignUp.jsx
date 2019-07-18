import React from 'react';
import './FormSignUp.sass';
import TextInput from './TextInput/TextInput';
import EmailInput from "./EmailInput/EmailInput";
import InputPass from "./InputPass/InputPass";
import { modalOpen } from "../../../../Store/Actions/actionModal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


class FormSignUp extends React.Component {
  render() {
    return (
      <div className="main-form">
        <div className="main-form__headline">
          <h2 className='h2-black fs-24 lh-30 ls-3 fw-700 mb-10'>
           Join the Tribus community
          </h2>
        </div>
        <form action="" className='form'>

          <TextInput placeholder={'First name'}/>
          <TextInput placeholder={'Last name'}/>

          <EmailInput />

          <div className='form-password'>
            <label htmlFor="">
              Password:
            </label>
            <div className='form-password__block'>
              <InputPass placeholder={'Enter password'} name={'password'}/>
              <InputPass placeholder={'Confirm password'} name={'passwordConfirm'}/>
            </div>
          </div>

          <p className='form-license'>
            Any personal information you provide will be dealt with in accordance with
            our
            <a href="./#">
              Privacy Collection Statement
            </a>
            . By Creating an account you agree to our
            <a href="./#">
              Terms and Conditions.
            </a>
          </p>

          <div className='fBtn-adapt form-button__create'>
            <button
              type='button'
              className='btn green sm-wide fs-16 lh-22 ls-24 fw-700'
            >
              Create
            </button>
          </div>
          {/*onClick={ modalKey ? this.onSwitchForm : () => this.props.openModal('signInModal')}*/}
          <div className='fBtn-adapt form-button__login'>
            <button
              type='button'
              className='btn transparent sm-wide fs-16 lh-17 ls-24 fw-600'
              onClick={ () => this.props.modalOpen('signInModal') }
            >
              Log in
            </button>
          </div>

        </form>
      </div>
    );
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    modalOpen: bindActionCreators(modalOpen, dispatch)
  }
};

export default connect( null, mapDispatchToProps )(FormSignUp);

