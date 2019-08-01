import axios from "axios";
//недоделал

export const GET_SORT_VALUES = {
  PROJECT_SORT_VALUES: 'PROJECT_SORT_VALUES',
};


const projectsSortValues = (values) => {
  return {
    type: GET_SORT_VALUES.PROJECT_SORT_VALUES,
    payload: values
  }
};

//
// export const getProjectsSortValues = () => {
//   return (dispatch) => {
//     axios.get(`https://dev.tribus.org/api/v0.7/ideas?Page=${page}&PageSize=${pageSize}&States=IDEA`)
//   }
// }
