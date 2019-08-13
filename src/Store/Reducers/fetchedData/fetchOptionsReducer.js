import { SORT_OPTIONS } from "../../Actions/fetchedData/actionGetSortOptions";

let InitialState = {
  categories: [
    { value: '', label: 'All projects'}
  ],
  benefits: [
    { value: '', label: 'All projects'}
  ],
  isCategories: false,
  isBenefits: false
};

const fetchedOptionsReducer = (state = InitialState, action) => {
  switch(action.type) {
    // case SORT_OPTIONS.REQUEST_CATEGORIES_OPTIONS:
    //   // debugger;
    //   return {
    //     ...state,
    //     categoriesLoading: true
    //   };
    // case SORT_OPTIONS.REQUEST_BENEFITS_OPTIONS:
    //   // debugger;
    //   return {
    //     ...state,
    //     benefitsLoading: true
    //   };
    case SORT_OPTIONS.RECEIVE_CATEGORIES_OPTIONS:
    // debugger;
      return {
        ...state,
        categories: [
          ...state.categories,
          ...action.payload.items.map(item =>
            ({ value: item.id, label: item.name}))
        ],
        isCategories: true
      };
    case SORT_OPTIONS.RECEIVE_BENEFITS_OPTIONS:
    // debugger;
      return {
        ...state,
        benefits: [
          ...state.benefits,
          ...action.payload.items.map(item =>
          ({ value: item.id, label: item.name}))
        ],
        isBenefits: true
      };
    case SORT_OPTIONS.STATE_OPTIONS_CLEANING:
      // debugger;
      console.log('options cleaned');
      return {
        categories: [
          { value: '', label: 'All projects'}
        ],
        benefits: [
          { value: '', label: 'All projects'}
        ],
        isCategories: false,
        isBenefits: false
      };
    default:
      return state;
  }
};

export default fetchedOptionsReducer;