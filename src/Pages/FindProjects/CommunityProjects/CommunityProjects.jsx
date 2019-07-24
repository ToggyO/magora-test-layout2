import React from 'react';
import './CommunityProjects.sass';
import ProjectCard from "../../../Components/ProjectCard/ProjectCard";
import { projectCard } from './projectCardsInfo';


const CommunityProjects = () => {
  return (
    <div className='communityProjects wrapper'>
      <div className="communityProjects-container wrapper-container">
        <div className="communityProjects-content wrapper-container-content pl-31 pr-31 pt-13 pb-13 d-f fw-w">
          {projectCard.map( (card, i) => <ProjectCard key={i} card={card}/>)}
        </div>
      </div>
    </div>
  )
};


export default CommunityProjects;