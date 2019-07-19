import React from 'react';



class FormValidation extends React.Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
    this.initialValidation = this.initialValidation.bind(this);
    this.validateField = this.validateField.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

  };

  componentDidMount() {
    this.initialValidation();
  };

  initialValidation = () => {
    let initValid = this.state.values;
    let keys = Object.keys(initValid);

    keys.forEach( (fieldName, i) => {
      let value = initValid[fieldName];
      this.validateField( fieldName, value );
    });
  };

  handleChange = (e) => {
    const {target: {name, value}} = e;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value
      },
    }, () => { this.initialValidation( name, value ) } );

  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let passwordValid = this.state.passwordValid;


    switch(fieldName) {
      case 'firstName':
        const firstNameValid = value.length <= 20 && value.length >= 2;
        fieldValidationErrors.firstName = firstNameValid ? '' : 'between 2 and 20 symbols';
        break;
      case 'lastName':
        const lastNameValid = value.length <= 20 && value.length >= 2;
        fieldValidationErrors.lastName = lastNameValid ? '' : 'between 2 and 20 symbols';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : 'min 6' +
          ' symbols';
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

  handleBlur = (e) => {
    const { target: {name} } = e;

    this.setState({
      visited: {
        ...this.state.visited,
        [name]: true,
      },
    });
  };

  render() {

    return (
      <div className='formValidation'>
        {this.props.children}
      </div>
    )

  }
}

export default FormValidation;