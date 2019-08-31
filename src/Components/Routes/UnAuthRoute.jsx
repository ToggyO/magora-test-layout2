import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ErrorWrapper from '../ErrorWrapper';


const UnAuthRoute = ({ component: Component, redirect, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!rest.authData.isAuth) {
        return <Redirect to={`${redirect}`} />;
      }
      return <ErrorWrapper error={rest.errorWrapper.error}>
                <Component {...props}/>
             </ErrorWrapper>;
    }}
  />
);

UnAuthRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

const mapStateToProps = ({ authData, errorWrapper }) => ({ authData, errorWrapper });

export default connect(mapStateToProps)(UnAuthRoute);
