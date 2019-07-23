


switch(fieldName) {
  case 'firstName':
    let firstNameValid = value.length <= 20 && value.length >= 2;
    fieldValidationErrors.firstName = firstNameValid ? '' : 'between 2 and 20 symbols';
    break;
  case 'lastName':
    let lastNameValid = value.length <= 20 && value.length >= 2;
    fieldValidationErrors.lastName = lastNameValid ? '' : 'between 2 and 20 symbols';
    break;
  case 'email':
    let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    fieldValidationErrors.email = emailValid ? '' : 'is invalid';
    break;
  case 'password':
    let passwordValid = value.length >= 6;
    fieldValidationErrors.password = passwordValid ? '' : 'min 6' +
      ' symbols';
    if (this.state.formErrors.passwordConfirm !== undefined) {
      passwordConfirmValid =value === this.state.values.passwordConfirm;
      fieldValidationErrors.passwordConfirm = passwordConfirmValid ? '' : 'passwords, you entered is not the same';
    }
    break;
  case 'passwordConfirm':
    passwordConfirmValid = value === this.state.values.password;
    fieldValidationErrors.passwordConfirm = passwordConfirmValid ? '' : 'passwords, you entered is not the same';
    break;
  case 'verCode':
    if (this.state.values.role === 'admin') {
      const verCodeValid = value.length >= 6;
      fieldValidationErrors.verCode = verCodeValid ? '' : 'min 6' +
        ' symbols';
    } else {
      fieldValidationErrors.verCode = '';
    }
    break;
  default:
    break;
}