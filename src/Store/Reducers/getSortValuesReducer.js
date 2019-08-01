import { GET_SORT_VALUES } from '../Actions/actionProjectsSort';
//недоделал
let InitialState = {

};


const getSortValuesReducer = (state = InitialState, action) => {
  switch(action.type) {
    case GET_SORT_VALUES.PROJECT_SORT_VALUES:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default getSortValuesReducer;