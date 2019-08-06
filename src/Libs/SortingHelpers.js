import {parse} from "qs";


export default function sortingHelpers() {

  this.receivingData = receivingData.bind(this);
  // this.makeQueryString = makeQueryString.bind(this);
  this.defaultComponentDidMount = this.componentDidMount;


  this.componentDidMount = () => {
    this.defaultComponentDidMount();
    this.receivingData(this.props);
  };


  function receivingData(props) {
    const queryString = parse( props.location.search, { ignoreQueryPrefix: true });
    props.getProjects(
      queryString.page || props.fetchedProjectsData.currentPage,
      queryString.benefits || props.fetchedProjectsData.history.benefits,
      queryString.category || props.fetchedProjectsData.history.category,
      queryString.sort || props.fetchedProjectsData.history.sort,
      queryString.petition || props.fetchedProjectsData.history.petition,
      queryString.crowdfunding || props.fetchedProjectsData.history.crowdfunding,
      queryString.volunteering || props.fetchedProjectsData.history.volunteering);
  }



}














// export const makeQueryString = (obj) => {
//   let queryString = '';
//   Object.keys(obj).forEach(key => {
//     if (obj[key]) {
//       return queryString += `&${key}=${obj[key]}`;
//     } else {
//       return queryString
//     }
//   });
//   return `?${queryString.slice(1)}`;
// };