import React from 'react';
import './Form.sass';
import TextInput from './TextInput/TextInput';
import EmailInput from "./EmailInput/EmailInput";
import InputPass from "./InputPass/InputPass";
import {connect} from "react-redux";
import { signInForm, regForm } from "../../Store/Actions/actionForm";


class Form extends React.Component {

  onChangeForm = () => {

    // e.preventDefault;

    if (!this.props.regState.isReg) {
      this.props.onSignInForm();

    } else {
      this.props.onRegForm();

    }
    debugger;
  };

  render() {

    const { isReg } = this.props.regState;

    return (
      <div className="main-form">
        <div className="main-form__headline">
          <h2 className='h2-black fs-24 lh-30 ls-3 fw-700 mb-10'>
            { isReg ? 'Join the Tribus community' : 'Sign in to share ideas and support others' }</h2>
        </div>
        <form action="" className='form'>

          <TextInput />
          <TextInput />
          {/*<div className='form-lastName'>*/}
          {/*  <input type="text" placeholder='Last name' name='lastName'/>*/}
          {/*</div>*/}
          <EmailInput />
          <div className='form-password'>
            <label htmlFor="">
              Password:
            </label>
            <div className='form-password__block'>
              <InputPass />
              <InputPass />
              {/*<input type='password' placeholder="Confirm password" name='passwordConfirm' />*/}
              {/*<button>*/}
              {/*  <img src="https://img.lovepik.com/element/40090/4299.png_860.png"*/}
              {/*       alt=""/>*/}
              {/*</button>*/}
            </div>
          </div>
          <p className='form-license'>
            Any personal information you provide will be dealt with in accordance with
            our <a href="./#">Privacy Collection Statement</a>. By Creating an account you agree to our <a href="./#">Terms and Conditions.</a>
          </p>
          <div className='fBtn-adapt form-button__create'>
            <button className='btn green sm-wide fs-16 lh-22 ls-24 fw-700'>
              Create
            </button>
          </div>
          <div className='fBtn-adapt form-button__login' onClick={ this.onChangeForm }>
            <button type='button' className='btn transparent sm-wide fs-16 lh-17 ls-24 fw-600'>
              Log in
            </button>
          </div>

        </form>
      </div>
    );
  };
};

let mapStateToProps = ({ regState }) => ( { regState,} );

let mapDispatchToProps = (dispatch) => {
  return {
    onSignInForm: () => {
      dispatch( signInForm() );
    },
    onRegForm: () => {
      dispatch( regForm() );
    }
  }
};

export default connect( mapStateToProps, mapDispatchToProps )(Form)