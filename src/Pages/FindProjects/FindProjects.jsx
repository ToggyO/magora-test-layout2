import React from 'react';
import './FindProjects.sass';
import ProjectSearch from "./ProjectSearch/ProjectSearch";
import CommunityProjects from "./CommunityProjects/CommunityProjects";


const FindProjects = () => {
  return (
    <div className='findProjects'>
      <ProjectSearch />
      <CommunityProjects />
    </div>
  )
};


export default FindProjects;