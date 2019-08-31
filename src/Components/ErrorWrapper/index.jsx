import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.sass';
import { errorWrapperFalse } from '../../Store/Actions/error/actionError';


const ErrorWrapper = (props) => {
  const {
    error,
    errorFalse,
  } = props;

  return <>
    { !error
      ? props.children
      : <div className="error_wrapper d-f fd-c ai-c">
        <h1 className="h2-black fs-40 fw-600 mb-10">Something wrong...</h1>
          <div className="error_wrapper__content">
            <button
              className="btn blue lg sh-btn-lg fs-18 ls-27 lh-18 fw-600"
              onClick={errorFalse}
            >
              Try again
            </button>
          </div>
      </div>
    }
  </>;
};

const mapDispatchToProps = (dispatch) => ({
  errorFalse: bindActionCreators(errorWrapperFalse, dispatch),
});

export default connect(null, mapDispatchToProps)(ErrorWrapper);
