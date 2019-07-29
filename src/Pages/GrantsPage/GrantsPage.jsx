import React from 'react';
import './GrantsPage.sass';
import GrantSearch from "./GrantSearch/GrantSearch";
import GrantProjects from "./GrantProjects/GrantProjects";


const GrantsPage = () => {
  return (
    <>
      <GrantSearch />
      <GrantProjects />
    </>
  )
};


export default GrantsPage;