import React from 'react';
import './CommunityProjects.sass';
import ProjectCard from "../../../Components/ProjectCard/ProjectCard";
import {
  getProjects,
  projectsSortValues,

} from "../../../Store/Actions/actionFetchProjectsData";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import history from "../../../history";
import { stringify, parse } from 'qs';
// import {makeQueryString} from "../../../Libs/SortingHelpers";


class CommunityProjects extends React.Component {

  // data = this.props.fetchedProjectsData.history;

  componentDidMount() {
    window.scrollTo(0, 0);
    let data = this.props.fetchedProjectsData.history;
    const queryString = parse( this.props.location.search, { ignoreQueryPrefix: true });
    this.props.getProjects( queryString.page || this.props.fetchedProjectsData.currentPage, queryString.benefits || data.benefit, queryString.category || data.category, queryString.sort || data.sort, queryString.petition || data.petition, queryString.crowdfunding || data.crowdfunding, queryString.volunteering || data.volunteering);
    console.log(queryString);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      let data = this.props.fetchedProjectsData.history;
      const queryString = parse( this.props.location.search, { ignoreQueryPrefix: true });
      this.props.getProjects( queryString.page || this.props.fetchedProjectsData.currentPage, queryString.benefits || data.benefit, queryString.category || data.category, queryString.sort || data.sort, queryString.petition || data.petition, queryString.crowdfunding || data.crowdfunding, queryString.volunteering || data.volunteering);

    }
    window.scrollTo(0, 0);
  }

  onPageChanged = (page) => {
    const parseString = parse( this.props.location.search, { ignoreQueryPrefix: true });
    parseString.page = page;
    history.push(`${this.props.location.pathname}?${stringify(parseString)}`);
  };

  render() {

    let projectsList = this.props.fetchedProjectsData.items.map((item, i) => <ProjectCard key={item.idea.id} item={item}/>);
    let pagesCount = Math.ceil(this.props.fetchedProjectsData.totalCardsCount / this.props.fetchedProjectsData.pageSize);
    let pages = [ ];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div className='communityProjects wrapper'>
        <div className="communityProjects-content wrapper-container pl-31 pr-31 pt-13 pb-13 d-f fw-w jc-c">
          { this.props.fetchedProjectsData.loading ? 'Waiting!' : projectsList }
        </div>
        <div style={{width: '100%'}}>
          { pages.map( (page, i) => <span
            className={ this.props.fetchedProjectsData.currentPage === page ? 'selectedPage' : '' }
            onClick={ () => {this.onPageChanged(page)}
          }
          style={{marginLeft: 10}}
          key={i}
        >
              {page}
            </span>)
          }
        </div>
      </div>
    )
  }
}


let mapStateToProps = ({ fetchedProjectsData }) => ({ fetchedProjectsData, });

let mapDispatchToProps = (dispatch) => {
  return {
    getProjects: bindActionCreators(getProjects, dispatch),
    projectsSortValues: bindActionCreators(projectsSortValues, dispatch),
  }
};

export default connect( mapStateToProps, mapDispatchToProps )(CommunityProjects);












// history.push({
//   pathname: this.props.location.pathname,
//   search: stringify(parseString)
// });