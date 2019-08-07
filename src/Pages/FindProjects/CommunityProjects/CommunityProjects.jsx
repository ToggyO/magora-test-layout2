import React from 'react';
import './CommunityProjects.sass';
import {
  getProjects,
  projectsSortValues,
} from "../../../Store/Actions/actionFetchProjectsData";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import sortingHelpers from '../../../Libs/SortingHelpers';
import {
  renderingPagination,
  renderingProjects
} from "../../../Libs/additionalSortingFunctions";
import Preloader from "../../../Components/Preloader/Preloader";
import Pagination from "../../../Components/Pagination/Pagination";



class CommunityProjects extends React.Component {
  constructor(props) {
    super(props);

    sortingHelpers.call(this);
  };


  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.receivingData(this.props);
    }
    window.scrollTo(0, 0);
  }


  render() {
    return (
      <div className='communityProjects wrapper'>
        <div className="communityProjects-content wrapper-container pl-31 pr-31 pt-13 pb-13 d-f fw-w jc-c">
          {
            this.props.fetchedProjectsData.loading
              ? <Preloader />
              : renderingProjects(this.props.fetchedProjectsData.items)
          }
        </div>
        <div className='pt-5 pb-5 pl-5 pr-5 d-f jc-c' style={{width: '100%'}}>
          <Pagination {...this.props}/>
          {/*{*/}
          {/*  renderingPagination(*/}
          {/*    this.props.fetchedProjectsData.totalCardsCount,*/}
          {/*    9,*/}
          {/*    this.props.fetchedProjectsData.currentPage,*/}
          {/*    this.props.location*/}
          {/*  )*/}
          {/*}*/}
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


