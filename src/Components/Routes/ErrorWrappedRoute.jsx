import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ErrorWrapper from '../ErrorWrapper';


const ErrorWrappedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => <ErrorWrapper error={rest.userProfileData.error}>
        <Component {...props}/>
      </ErrorWrapper>
    }
  />
);

ErrorWrappedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

const mapStateToProps = ({ userProfileData }) => ({ userProfileData });

export default connect(mapStateToProps)(ErrorWrappedRoute);
