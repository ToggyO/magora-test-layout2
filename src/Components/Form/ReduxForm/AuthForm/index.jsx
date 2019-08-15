import React from 'react'
import '../../FormStyle.sass';
import { Field, reduxForm } from 'redux-form'
import ReduxFormTextInput from "../ReduxFormTextInput";
import ReduxFormPassword from "../ReduxFormPassword";
import validationConditionsSignIn from "./AuthValidation";
import {bindActionCreators} from "redux";
import {modalOpen} from "../../../../Store/Actions/modal/actionModal";
import {connect} from "react-redux";
import * as axios from "axios";


let AuthForm = props => {

  const { handleSubmit, pristine, valid } = props;

  const authRequest = (values) => {
    let requestBody = {
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address,
      email: values.email,
      password: values.password,
      // phone: '001174951234567',
      organizationName: values.communityName ? values.communityName : '',
      location: {
        areaName: "7-9 Fullerton Street",
        stateName: "Woollahra",
        stateAbbreviation: "NSW"
      },
      verifyInfo: {
        returnUrl: "/"
      },
      role: values.role
    };

    let BASE_URL = `http://localhost:3000/api/v0.7/users`;
    return axios.post(BASE_URL, requestBody)
      .then(res => {
      debugger;
        if (res.data.code === 'success'){
          props.modalOpen('regSuccess');
        }
      })
      .catch( error => console.log(error))
  };


  return  <div className="main-form">
    <div className="main-form__headline">
      <h2 className='h2-black fs-24 lh-30 ls-3 fw-700 mb-10 t-align-c'>
        Sign in to share ideas and support others
      </h2>
    </div>
    <form
      onSubmit={handleSubmit}
      className='form'
    >

      <Field
        placeholder='First name'
        name="firstName"
        type='text'
        label='First Name:'
        component={ReduxFormTextInput}
      />

      <Field
        placeholder='Last name'
        name="lastName"
        type='text'
        label='Last Name:'
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
      </div>

      <p className='form-license t-align-c'>
        Any personal information you provide will be dealt with in accordance with
        our
        <a href="../..#">
          Privacy Collection Statement
        </a>
        . By Creating an account you agree to our
        <a href="../..#">
          Terms and Conditions.
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
  }
};

export default connect( null, mapDispatchToProps )(AuthForm);

