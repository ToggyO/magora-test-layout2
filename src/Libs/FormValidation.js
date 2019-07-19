export const initialValidation = () => {
  let initValid = this.state.values;
  let keys = Object.keys(initValid);

  keys.forEach( (fieldName, i) => {
    let value = initValid[fieldName];
    this.validateField( fieldName, value );
  });
};

export const handleChange = (e) => {
  const {target: {name, value}} = e;
  this.setState({
    values: {
      ...this.state.values,
      [name]: value
    },
  }, () => { this.initialValidation( name, value ) } );

};


export const onSubmitHandler = (e) => {
  e.preventDefault();
  console.log(this.state);
};

export const validateField = (fieldName, value) => {
  let fieldValidationErrors = this.state.formErrors;
  let passwordValid = this.state.passwordValid;
  let passwordConfirmValid = this.state.passwordConfirmValid;

  switch(fieldName) {
    case 'firstName':
      const firstNameValid = value.length <= 20 && value.length >= 2;
      fieldValidationErrors.firstName = firstNameValid ? '' : 'between 2 and 20 symbols';
      break;
    case 'lastName':
      const lastNameValid = value.length <= 20 && value.length >= 2;
      fieldValidationErrors.lastName = lastNameValid ? '' : 'between 2 and 20 symbols';
      break;
    case 'email':
      const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : 'is invalid';
      break;
    case 'password':
      passwordValid = value.length >= 6;
      fieldValidationErrors.password = passwordValid ? '' : 'min 6' +
        ' symbols';
      passwordConfirmValid = value === this.state.values.passwordConfirm;
      fieldValidationErrors.passwordConfirm = passwordConfirmValid ? '' : 'passwords, you entered is not the same';
      break;
    case 'passwordConfirm':
      passwordConfirmValid = value === this.state.values.password;
      fieldValidationErrors.passwordConfirm = passwordConfirmValid ? '' : 'passwords, you entered is not the same';
      break;
    default:
      break;
  }

  let formValid = true;
  let keys = Object.keys(fieldValidationErrors);
  keys.forEach((fieldName, i) => {
    if (fieldValidationErrors[fieldName]) {
      formValid = false;
    }
  });

  this.setState({
    formErrors: fieldValidationErrors,
    formValid: formValid
  });
}

export const handleBlur = (e) => {
  const { target: {name} } = e;

  this.setState({
    visited: {
      ...this.state.visited,
      [name]: true,
    },
  });
};