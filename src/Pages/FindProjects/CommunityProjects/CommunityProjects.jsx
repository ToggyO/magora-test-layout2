import React from 'react';
import './CommunityProjects.sass';
import ProjectCard from "../../../Components/ProjectCard/ProjectCard";
import { getProjects } from "../../../Store/Actions/actionFetchProjectsData";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import history from "../../../history";
import { parse } from 'qs';


class CommunityProjects extends React.Component {

  data = this.props.fetchedProjectsData;

  componentDidMount() {
    window.scrollTo(0, 0);

    // let params = { };
    // let url = this.props.location.search;

    // if (url) {
      // url.split('?')[1].split('&').map(item => {
      //
      //   const [key,value] = item.split('=')
      //   params[key] = value;
      // });
    // }
    // this.props.getProjects( params.page || this.data.currentPage, this.data.pageSize);
    const queryString = parse( this.props.location.search, { ignoreQueryPrefix: true });
    this.props.getProjects( queryString.page || this.data.currentPage, this.data.pageSize);

  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

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
            className={ this.props.currentPage === page ? 'selectedPage' : '' }
            onClick={ (e) => {
              this.props.getProjects(page, this.data.pageSize);
              let pagesHistory = `page=${page}`;
              history.push(`?${pagesHistory}`);
            }
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
    getProjects: bindActionCreators(getProjects, dispatch)
  }
};

export default connect( mapStateToProps, mapDispatchToProps )(CommunityProjects);
