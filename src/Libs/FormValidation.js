
//Form Validation
export default function formInitialize(fieldArray, validationConditions) {

  this.initialValidation = initialValidation.bind(this);
  this.handleChange = handleChange.bind(this);
  this.onSubmitHandler = onSubmitHandler.bind(this);
  this.validateField = validateField.bind(this);
  this.handleBlur = handleBlur.bind(this);
  this.validationConditions = validationConditions.bind(this);
  this.passAdditionalProps = passAdditionalProps.bind(this);

  this.state = {
    ...this.state,
    values: {},
    formErrors: {},
    visited: {},
    formValid: false,
  };

  fieldArray.forEach(({fieldName, initValue}) => {
    this.state.values = {
      ...this.state.values,
      [fieldName]: initValue,
    };
    // this.state.formErrors = {
    //   ...this.state.formErrors,
    //   [fieldName]: '',
    // };
    // this.state.visited = {
    //   ...this.state.visited,
    //   [fieldName]: false,
    // };
  });

  // Обдумать
  this.defaultComponentDidMount = this.componentDidMount;
  this.componentDidMount = () => {
    this.defaultComponentDidMount();
    this.initialValidation();
  };

  function initialValidation() {
    const { values } = this.state;
    this.validateField(this.validationConditions(values));
  }

  function handleChange(e) {
    const {target: {name, value}} = e;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value
      },
    }, () => {
      this.initialValidation(name, value)
    });
    console.log(this.state);
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    console.log(this.state);
  }

  function validateField(fieldValidationErrors) {

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
    const {target: {name}} = e;

    this.setState({
      visited: {
        ...this.state.visited,
        [name]: true,
      },
    });
  }

  function passAdditionalProps(fieldName) {
    return {
      name: fieldName,
      value: this.state.values[fieldName],
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      error: this.state.formErrors[fieldName],
      visited: this.state.visited[fieldName],
    };
  }
};



// //Form Validation
//
// export default function formInitialize(fieldArray, validationConditionsSignUp) {
//
//   this.initialValidation = initialValidation.bind(this);
//   this.handleChange = handleChange.bind(this);
//   this.onSubmitHandler = onSubmitHandler.bind(this);
//   this.validateField = validateField.bind(this);
//   this.handleBlur = handleBlur.bind(this);
//   this.validationConditionsSignUp = validationConditionsSignUp.bind(this);
//
//   this.state = {
//     ...this.state,
//     formErrors: {},
//     values: {},
//     visited: {},
//     formValid: false,
//   };
//
//   fieldArray.forEach(({fieldName, initValue}) => {
//     this.state.values = {
//       ...this.state.values,
//       [fieldName]: initValue,
//     };
//     this.state.formErrors = {
//       ...this.state.formErrors,
//       [fieldName]: '',
//     };
//     this.state.visited = {
//       ...this.state.visited,
//       [fieldName]: false,
//     };
//   });
//
//   // Обдумать
//   this.defaultComponentDidMount = this.componentDidMount;
//   this.componentDidMount = () => {
//     this.defaultComponentDidMount();
//     this.initialValidation();
//   };
//
//
//   function initialValidation() {
//     const { values } = this.state;
//     let keys = Object.keys(values);
//
//     keys.forEach((fieldName, i) => {
//       let value = values[fieldName];
//       this.validateField(this.validationConditionsSignUp(fieldName, value));
//     });
//   }
//
//   function handleChange(e) {
//     const {target: {name, value}} = e;
//     this.setState({
//       values: {
//         ...this.state.values,
//         [name]: value
//       },
//     }, () => {
//       this.initialValidation(name, value)
//     });
//
//   }
//
//   function onSubmitHandler(e) {
//     e.preventDefault();
//     console.log(this.state);
//   }
//
//   function validateField(fieldValidationErrors) {
//
//     let formValid = true;
//     let keys = Object.keys(fieldValidationErrors);
//     keys.forEach((fieldName, i) => {
//       if (fieldValidationErrors[fieldName]) {
//         formValid = false;
//       }
//     });
//
//     this.setState({
//       formErrors: fieldValidationErrors,
//       formValid: formValid
//     });
//   }
//
//   function handleBlur(e) {
//     const {target: {name}} = e;
//
//     this.setState({
//       visited: {
//         ...this.state.visited,
//         [name]: true,
//       },
//     });
//   }
// };









