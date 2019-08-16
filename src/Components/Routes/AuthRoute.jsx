import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import {connect} from "react-redux";


const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (rest.authData.isAuth
      ? <Redirect to='/' />
      : <Component {...props}/>
    )}
  />
);

AuthRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

let mapStateToProps = ({authData}) => ({authData});

export default connect(mapStateToProps)(AuthRoute);