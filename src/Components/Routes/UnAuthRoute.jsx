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
      return <ErrorWrapper error={rest.userProfileData.error}>
                <Component {...props}/>
             </ErrorWrapper>;
    }}
  />
);

UnAuthRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

const mapStateToProps = ({ authData, userProfileData }) => ({ authData, userProfileData });

export default connect(mapStateToProps)(UnAuthRoute);
