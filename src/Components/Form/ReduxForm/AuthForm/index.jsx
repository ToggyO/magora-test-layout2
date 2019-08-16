import React from 'react'
import '../../FormStyle.sass';
import { Field, reduxForm } from 'redux-form'
import ReduxFormTextInput from "../ReduxFormTextInput";
import ReduxFormPassword from "../ReduxFormPassword";
import validationConditionsSignIn from "./AuthValidation";
import {bindActionCreators} from "redux";
import {modalOpen} from "../../../../Store/Actions/modal/actionModal";
import {connect} from "react-redux";
import {authRequest} from "../../../../Store/Actions/Auth/actionAuth";


let AuthForm = props => {

  const { handleSubmit, pristine, valid, authRequest } = props;

  return  <div className="main-form">
    <div className="main-form__headline">
      <h2 className='h2-black fs-24 lh-30 ls-3 fw-700 mb-10 t-align-c'>
        Sign in to share ideas and support others
      </h2>
    </div>
    <form
      onSubmit={handleSubmit(authRequest)}
      className='form'
    >

      <Field
        placeholder='Email'
        name="email"
        type='email'
        label='Email:'
        component={ReduxFormTextInput}
      />

      <div className='form-password'>
        <div className='form-password__block' id="form-password__block">

          <Field
            placeholder={'Enter password'}
            name="password"
            type='password'
            label={'Password:'}
            component={ReduxFormPassword}
            style={{ width: '100%'}}
          />

        </div>
        <a href="./#" style={ { width: '100%' } }>
          Forgot Password
        </a>
      </div>

      <p className='form-license t-align-c'>
        Business or local council?
        <a href="./#">
          Click here.
        </a>
      </p>

      <div className='fBtn-adapt form-button__create'>
        <button
          type='submit'
          className='btn green sm-wide fs-16 lh-22 ls-24 fw-700'
          disabled={pristine || !valid}
        >
          Login in
        </button>
      </div>

      <div className='fBtn-adapt form-button__login'>
        <button
          type='button'
          className='btn transparent sm-wide fs-16 lh-17 ls-24 fw-600'
          onClick={ () => props.modalOpen('signUpModal') }
        >
          Create account
        </button>
      </div>

    </form>
  </div>
};

AuthForm = reduxForm({
  form: 'authorization',
  validate: validationConditionsSignIn,
})(AuthForm);

const mapDispatchToProps = (dispatch) => {
  return {
    modalOpen: bindActionCreators(modalOpen, dispatch),
    authRequest: bindActionCreators(authRequest, dispatch),
  }
};

export default connect( null, mapDispatchToProps )(AuthForm);

