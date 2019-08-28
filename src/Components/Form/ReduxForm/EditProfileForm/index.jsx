import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './style.sass';
import LabelWrapper from '../../../LabelWrapper';
import ReduxFormTextInput from '../ReduxFormTextInput';

/* eslint-disable */
let EditProfileForm = props => {
  const {
    handleSubmit,
    pristine,
    valid,
    error,
  } = props;

  return <form className="form-edit" onSubmit={handleSubmit}>
    <div className="form-edit__header">
      <h4 className="fs-24 fw-600 mb-4">Your Tribus Account details</h4>
      <p className="fs-18 lh-25">Make sure your information is up to date.
        You can change your password on this page as well as update your relevant information.
      </p>
    </div>
    <div className="form-edit__profile">
      <LabelWrapper label="Profile">
        <Field
          name="firstName"
          type="text"
          label="First Name"
          isRequired={true}
          component={ReduxFormTextInput}
        />

        <Field
          name="lastName"
          type="text"
          label="Last Name"
          isRequired={true}
          component={ReduxFormTextInput}
        />

        <Field
          name="email"
          type="email"
          label="Contact Email"
          isRequired={true}
          component={ReduxFormTextInput}
        />

        <Field
          name="phoneNumber"
          type="tel"
          label="Phone number"
          component={ReduxFormTextInput}
        />
      </LabelWrapper>
    </div>
    <div className="form-edit__submit d-f jc-c">
      <button
        type="submit"
        className="btn green sm-wide fs-16 lh-22 ls-24 fw-700 sh-btn-lg"
        disabled={pristine || !valid}
      >
        Save Information
      </button>
    </div>
  </form>;
};


EditProfileForm = reduxForm({
  form: 'editProfileForm',
})(EditProfileForm);


export default EditProfileForm;