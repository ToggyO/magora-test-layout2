import React from 'react'
import { Field, reduxForm, formValueSelector  } from 'redux-form'
import ReduxFormTextInput from "../ReduxFormTextInput";
import ReduxFormSelect from '../ReduxFormSelect/Select';
import ReduxFormPassword from "../ReduxFormPassword";
import validationConditionsSignUp from "./RegistrationValidation";
import {options} from './optionsList';
import {bindActionCreators} from "redux";
import {modalOpen} from "../../../../Store/Actions/modal/actionModal";
import {connect} from "react-redux";
import * as axios from "axios";


let RegistrationForm = props => {

  const { handleSubmit, pristine, valid } = props;

  const regRequest = (values) => {
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
        Join the Tribus community
      </h2>
    </div>
    <form
      onSubmit={handleSubmit(regRequest)}
      className='form'
    >

      <div className='form-switchRole'>
        <Field
          component={ReduxFormSelect}
          name='role'
          label=''
          options={options}
        />

        {props.role === 'COMMUNITY_GROUP' &&
          <Field
            placeholder='Community group name'
            name="communityName"
            type='text'
            label=''
            component={ReduxFormTextInput}
          />
        }
      </div>

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

      <Field
        placeholder='Email'
        name="email"
        type='email'
        label='Contact information:'
        component={ReduxFormTextInput}
      />

      <Field
        placeholder='Address'
        name="address"
        type='text'
        label='Enter Address:'
        initialValues
        component={ReduxFormTextInput}
        disabled={true}
      />

      <div className='form-password'>
        <div className='form-password__block' id="form-password__block">

          <Field
            placeholder={'Enter password'}
            name="password"
            type='password'
            label={'Password:'}
            component={ReduxFormPassword}
          />

          <Field
            placeholder={'Confirm password'}
            name="passwordConfirm"
            type='password'
            label="&nbsp;"
            component={ReduxFormPassword}
          />

        </div>
      </div>

      <p className='form-license t-align-c'>
        Any personal information you provide will be dealt with in accordance with
        our
        <a href="..#">
          Privacy Collection Statement
        </a>
        . By Creating an account you agree to our
        <a href="..#">
          Terms and Conditions.
        </a>
      </p>

      <div className='fBtn-adapt form-button__create'>
        <button
          type='submit'
          className='btn green sm-wide fs-16 lh-22 ls-24 fw-700'
          disabled={pristine || !valid}
        >
          Create
        </button>
      </div>

      <div className='fBtn-adapt form-button__login'>
        <button
          type='button'
          className='btn transparent sm-wide fs-16 lh-17 ls-24 fw-600'
          onClick={ () => props.modalOpen('regSuccess') }
        >
          Log in
        </button>
      </div>

    </form>
  </div>
};

RegistrationForm = reduxForm({
  form: 'registration',
  validate: validationConditionsSignUp,
  initialValues: {
    address: '7-9 Fullerton Street, Woollahra, NSW 2025',
    // address: '78 Canberra Avenue, Griffith, ACT 2603',
    role: 'USER',
  }
})(RegistrationForm);


const selector = formValueSelector('registration');
const mapStateToProps = (state) => {
  return {
    role: selector(state, 'role'),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modalOpen: bindActionCreators(modalOpen, dispatch),
  }
};

export default connect( mapStateToProps, mapDispatchToProps )(RegistrationForm);
