import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import modalReducer from './modal/modalReducer';
import fetchedDataReducer from './fetchedData/fetchDataReducer';
import fetchedOptionsReducer from './fetchedData/fetchOptionsReducer';
import authReducer from './Auth/authReducer';
import userProfileReducer from './users/userProfileReducer';
import errorWrapperReducer from './error/errorReducer';


export const reducers = combineReducers({
  modalState: modalReducer,
  fetchedData: fetchedDataReducer,
  fetchedProjectsOptions: fetchedOptionsReducer,
  form: formReducer,
  authData: authReducer,
  userProfileData: userProfileReducer,
  errorWrapper: errorWrapperReducer,
});
