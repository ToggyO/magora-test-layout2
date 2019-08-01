import React from 'react';
import './CommunityProjects.sass';
import ProjectCard from "../../../Components/ProjectCard/ProjectCard";
import { getProjects } from "../../../Store/Actions/actionFetchData";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import history from "../../../history";
import { parse } from 'qs';


class CommunityProjects extends React.Component {

  data = this.props.fetchedData;

  componentDidMount() {
    window.scrollTo(0, 0);
    const queryString = parse( this.props.location.search, { ignoreQueryPrefix: true });
    this.props.getProjects( queryString.page || this.data.currentPage, this.data.pageSize);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {

    let projectsList = this.props.fetchedData.items.map((item, i) => <ProjectCard key={item.idea.id} item={item}/>);
    let pagesCount = Math.ceil(this.props.fetchedData.totalCardsCount / this.props.fetchedData.pageSize);
    let pages = [ ];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div className='communityProjects wrapper'>
        <div className="communityProjects-content wrapper-container pl-31 pr-31 pt-13 pb-13 d-f fw-w jc-c">
          { this.props.fetchedData.loading ? 'Waiting!' : projectsList }
        </div>
        <div style={{width: '100%'}}>
          { pages.map( (page, i) => <span
            className={ this.props.currentPage === page ? 'selectedPage' : '' }
            onClick={ (e) => {
              this.props.getProjects(page, this.data.pageSize);
              history.push(`/projectSearch?page=${page}`);
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


let mapStateToProps = ({ fetchedData }) => ({ fetchedData, });

let mapDispatchToProps = (dispatch) => {
  return {
    getProjects: bindActionCreators(getProjects, dispatch)
  }
};

export default connect( mapStateToProps, mapDispatchToProps )(CommunityProjects);
