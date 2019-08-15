import React from 'react';
import './Main.sass';
import RegistrationForm from "../../../Components/Form/ReduxForm/RegistrationForm/";
// import Form from '../../../Components/Form/FormSignUp/FormSignUp';


class Main extends React.Component {
  render() {
    return (
      <div className='main wrapper'>
        <div className="wrapper-container">
          <div className="main-container pt-25 pb-30 pl-106 pr-106">
            <RegistrationForm />
            {/*<Form />*/}
          </div>
        </div>
      </div>
    );
  };
};


export default Main;