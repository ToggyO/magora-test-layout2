import { SORT_OPTIONS } from "../Actions/actionGetSortOptions";

let InitialState = {
  categories: [
    { id: '', name: 'All projects'}
  ],
  benefits: [
    { id: '', name: 'All projects'}
  ]
};

const fetchedOptionsReducer = (state = InitialState, action) => {
  switch(action.type) {
    case SORT_OPTIONS.RECEIVE_CATEGORIES_OPTIONS:
    // debugger;
      return {
        ...state,
        categories: [...state.categories, ...action.payload.items]
      };
    case SORT_OPTIONS.RECEIVE_BENEFITS_OPTIONS:
    // debugger;
      return {
        ...state,
        benefits: [...state.benefits, ...action.payload.items]
      };
    default:
      return state;
  }
};

export default fetchedOptionsReducer;