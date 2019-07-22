
//Form Validation
export default function formInitialize(fieldArray) {

  this.initialValidation = initialValidation.bind(this);
  this.handleChange = handleChange.bind(this);
  this.onSubmitHandler = onSubmitHandler.bind(this);
  this.validateField = validateField.bind(this);
  this.handleBlur = handleBlur.bind(this);


  this.state = {
    ...this.state,
    formErrors: {},
    values: {},
    visited: {},
    formValid: false,
  };


  fieldArray.forEach(fieldName => {
    this.state.values = {
      ...this.state.values,
      [fieldName]: '',
    };
    this.state.formErrors = {
      ...this.state.formErrors,
      [fieldName]: '',
    };
    this.state.visited = {
      ...this.state.visited,
      [fieldName]: false,
    };
  });
}


function initialValidation() {

    let initValid = this.state.values;
    let keys = Object.keys(initValid);

    keys.forEach( (fieldName, i) => {
      let value = initValid[fieldName];
      this.validateField( fieldName, value );
    });
  }

function handleChange(e) {
    const {target: {name, value}} = e;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value
      },
    }, () => { this.initialValidation( name, value ) } );

  }

function onSubmitHandler(e) {
    e.preventDefault();
    console.log(this.state);
  }

function validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let passwordConfirmValid;

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

function handleBlur(e) {
    const { target: {name} } = e;

    this.setState({
      visited: {
        ...this.state.visited,
        [name]: true,
      },
    });
  }




// export default formValidation;


