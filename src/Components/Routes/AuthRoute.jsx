import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const AuthRoute = ({ component: Component, redirect, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (rest.authData.isAuth) {
        return <Redirect to={`${redirect}`} />;
      }
      return <Component {...props}/>;
    }}
  />
);

AuthRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

const mapStateToProps = ({ authData }) => ({ authData });

export default connect(mapStateToProps)(AuthRoute);
