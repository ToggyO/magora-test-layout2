import { combineReducers } from 'redux';
import modalReducer from './modal/modalReducer';
import fetchedDataReducer from './fetchedData/fetchDataReducer';
import fetchedOptionsReducer from './fetchedData/fetchOptionsReducer';
import { reducer as formReducer } from 'redux-form'
import authReducer from "./Auth/authReducer";


export const reducers = combineReducers({
  modalState: modalReducer,
  fetchedData: fetchedDataReducer,
  fetchedProjectsOptions: fetchedOptionsReducer,
  form: formReducer,
  authData: authReducer,
});
