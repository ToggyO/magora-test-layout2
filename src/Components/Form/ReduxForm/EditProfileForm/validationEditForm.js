export default function validationEditForm(values) {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length < 2 || values.firstName.length > 20) {
    errors.firstName = 'between 2 and 20 symbols';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length < 2 || values.lastName.length > 20) {
    errors.lastName = 'between 2 and 20 symbols';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!values.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    errors.email = 'is invalid';
  }

  if (!values.address) {
    errors.address = 'Required';
  } else if (values.address.length < 6) {
    errors.address = 'min 6 symbols';
  }

  return errors;
}
