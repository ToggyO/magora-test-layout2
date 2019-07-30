import { FETCHED_DATA } from '../Actions/actionFetchData';

let InitialState = { };


const fetchDataReducer = (state = InitialState, action) => {
  switch(action.type) {
    case FETCHED_DATA.FETCHED_PROJECTS:
      return action.payload;
    default:
      return state;
  }
};


export default fetchDataReducer;
