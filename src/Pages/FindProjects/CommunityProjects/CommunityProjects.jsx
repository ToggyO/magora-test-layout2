import React from 'react';
import './CommunityProjects.sass';
import ProjectCard from "../../../Components/ProjectCard/ProjectCard";
import { projectCard } from './projectCardsInfo';
import {getAllProjects} from "../../../Store/Actions/actionFetchData";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


class CommunityProjects extends React.Component {

  componentDidMount() {
    this.props.getAllProjects();
  }

  render() {
    return (
      <div className='communityProjects wrapper'>
        <div className="communityProjects-content wrapper-container pl-31 pr-31 pt-13 pb-13 d-f fw-w jc-c">
          {projectCard.map( (card, i) => <ProjectCard key={i} card={card}/>)}
        </div>
      </div>
    )
  }
}


let mapStateToProps = ({ fetchedData }) => ({ fetchedData, });

let mapDispatchToProps = (dispatch) => {
  return {
    getAllProjects: bindActionCreators(getAllProjects, dispatch)
  }
};

export default connect( mapStateToProps, mapDispatchToProps )(CommunityProjects);
