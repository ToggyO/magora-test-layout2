import { ERROR_WRAPPER } from '../../Actions/error/actionError';

const InitialState = {
  error: false,
};

const errorWrapperReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ERROR_WRAPPER.ERROR_TRUE:
      return {
        error: true,
      };
    case ERROR_WRAPPER.ERROR_FALSE:
      return {
        error: false,
      };
    default:
      return state;
  }
};

export default errorWrapperReducer;
