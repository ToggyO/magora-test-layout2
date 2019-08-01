import React from 'react';
import './FindProjects.sass';
import ProjectSearch from "./ProjectSearch/ProjectSearch";
import CommunityProjects from "./CommunityProjects/CommunityProjects";


const FindProjects = (props) => {
  return (
    <>
      <ProjectSearch />
      <CommunityProjects {...props}/>
    </>
  )
};


export default FindProjects;