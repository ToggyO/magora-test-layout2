import { SORT_OPTIONS } from "../Actions/actionGetSortOptions";

let InitialState = {
  categories: [ ],
  benefits: [ ]
};

const fetchedOptionsReducer = (state = InitialState, action) => {
  switch(action.type) {
    case SORT_OPTIONS.RECEIVE_CATEGORIES_OPTIONS:
    // debugger;
      return {
        ...state,
        ...action.payload,
        categories: action.payload.items,
      };
    case SORT_OPTIONS.RECEIVE_BENEFITS_OPTIONS:
    // debugger;
      return {
        ...state,
        ...action.payload,
        benefits: action.payload.items
      };
    default:
      return state;
  }
};

export default fetchedOptionsReducer;