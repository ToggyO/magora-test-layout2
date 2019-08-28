
export default function validationConditionsSignUp(value) {
  const fieldValidationErrors = {};

  if (value.firstName.length < 2 || value.firstName.length > 20) {
    fieldValidationErrors.firstName = 'between 2 and 20 symbols';
  }

  if (value.lastName.length < 2 || value.lastName.length > 20) {
    fieldValidationErrors.lastName = 'between 2 and 20 symbols';
  }

  if (!value.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    fieldValidationErrors.email = 'is invalid';
  }

  if (value.password.length < 6) {
    fieldValidationErrors.password = 'min 6 symbols';
  }

  if (value.password !== value.passwordConfirm) {
    fieldValidationErrors.passwordConfirm = 'passwords, you entered is not the same';
  }

  if (this.state.values.role === 'council') {
    if (value.verCode.length < 6) {
      fieldValidationErrors.verCode = 'min 6 symbols';
    }
  }

  return fieldValidationErrors;
}
