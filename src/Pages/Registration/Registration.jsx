import React from 'react';
import './Registration.sass';
import Main from './Main/Main';


class Registration extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Main />
      </>
    );
  }
};


export default Registration;