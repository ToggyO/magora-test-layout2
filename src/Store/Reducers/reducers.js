import { combineReducers } from 'redux';
import modalReducer from './modal/modalReducer';
import fetchedDataReducer from './projectSearchPage/fetchDataReducer';
import fetchedOptionsReducer from './projectSearchPage/fetchOptionsReducer';
// import fetchedGrantsDataReducer from './grantsPage/fetchGrantsDataReducer';
// import fetchedEventsDataReducer from "./eventsPage/fetchEventsDataReducer";


export const reducers = combineReducers({
  modalState: modalReducer,
  fetchedData: fetchedDataReducer,
  fetchedProjectsOptions: fetchedOptionsReducer,
  // fetchedGrantsData: fetchedGrantsDataReducer,
  // fetchedEventsData: fetchedEventsDataReducer,
});
