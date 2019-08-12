import { FETCHED_PROJECTS_DATA } from '../../Actions/fetchedData/actionFetchProjectsData';

let InitialState = {
  items: [],
  isData: false,
  errors: {},
  loading: false,
  totalCardsCount: 0,
  currentPage: 1,
  history: {
    sort: '',
    category: '',
    benefits: '',
    creator: '',
    eventType: '',
    startDate: '',
    endDate: '',
    crowdfunding: false,
    volunteering: false,
    petition: false
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
        isData: true
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
    case FETCHED_PROJECTS_DATA.DATA_CLEANING:
      return {
        ...state,
        history: {
          sort: '',
          category: '',
          benefits: '',
          creator: '',
          eventType: '',
          startDate: '',
          endDate: '',
          crowdfunding: false,
          volunteering: false,
          petition: false
        }
      };
    case FETCHED_PROJECTS_DATA.DATE_PICK:
      debugger;
      return {
        ...state,
        history: {
          ...state.history,
          [action.payload.name]: action.payload.date.toISOString()
        }
      };
    default:
      return state;
  }
};

export default fetchedDataReducer;
