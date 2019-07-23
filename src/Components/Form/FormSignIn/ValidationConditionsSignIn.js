
export default function validationConditionsSignIn(value) {

  let fieldValidationErrors = {};

  if (value.firstName.length < 2 || value.firstName.length > 20) {
    fieldValidationErrors.firstName = 'between 2 and 20 symbols'
  }

  if (value.lastName.length < 2 || value.lastName.length > 20) {
    fieldValidationErrors.lastName = 'between 2 and 20 symbols'
  }

  if (value.password.length < 6) {
    fieldValidationErrors.password = 'min 6 symbols'
  }

  return  fieldValidationErrors
};

