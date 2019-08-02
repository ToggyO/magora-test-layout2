import { FETCHED_PROJECTS_DATA } from '../Actions/actionFetchProjectsData';

let InitialState = {
  items: [],
  errors: {},
  loading: false,
  pageSize: 9,
  totalCardsCount: 0,
  currentPage: 1,
  sortOptions: {
    sort: '',
    category: '',
    benefit: '',
    // volunteering: false,
    // petition: false,
    // crowdfunding: false,
  }
};


const fetchedDataReducer = (state = InitialState, action) => {
  switch(action.type) {
    case FETCHED_PROJECTS_DATA.REQUEST_PROJECTS:
      return {
        ...state,
        loading: true
      };
    case FETCHED_PROJECTS_DATA.RECEIVE_PROJECTS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        totalCardsCount: action.payload.total,
        currentPage: action.payload.page,
      };
    case FETCHED_PROJECTS_DATA.PROJECT_SORT_VALUES:
    debugger;
      return {
        ...state,
        sortOptions: {
          ...state.sortOptions,
          [action.payload.name]: action.payload.value
        }
      };
    default:
      return state;
  }
};

export default fetchedDataReducer;
