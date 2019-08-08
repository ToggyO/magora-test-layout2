import { FETCHED_PROJECTS_DATA } from '../../Actions/projectSearchPage/actionFetchProjectsData';

let InitialState = {
  items: [],
  isProjectsData: false,
  errors: {},
  // loading: false,
  totalCardsCount: 0,
  currentPage: 1,
  history: {
    sort: '',
    category: '',
    benefits: '',
    crowdfunding: false,
    volunteering: false,
    petition: false
  }
};


const fetchedDataReducer = (state = InitialState, action) => {
  switch(action.type) {
    // case FETCHED_PROJECTS_DATA.REQUEST_PROJECTS:
    //   return {
    //     ...state,
    //     loading: true
    //   };
    case FETCHED_PROJECTS_DATA.RECEIVE_PROJECTS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        totalCardsCount: action.payload.total,
        currentPage: action.payload.page,
        isProjectsData: true
      };
    case FETCHED_PROJECTS_DATA.PROJECT_SORT_VALUES:
      return {
        ...state,
        history: {
          ...state.history,
          [action.payload.name]: action.payload.value
        }
      };
    case FETCHED_PROJECTS_DATA.PROJECT_SORT_CHECKBOX_VALUES:
      return {
        ...state,
        history: {
          ...state.history,
          [action.payload.name]: !action.payload.value
        }
      };
    // case FETCHED_PROJECTS_DATA.UPLOAD_SORT_VALUES:
    //   return {
    //     ...state,
    //     history: {
    //       ...state.history,
    //       sort: action.payload.sort,
    //       category: action.payload.category,
    //       benefits: action.payload.benefits,
    //     }
    //   };
    default:
      return state;
  }
};

export default fetchedDataReducer;
