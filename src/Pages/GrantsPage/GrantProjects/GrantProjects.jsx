import React from 'react';
import './GrantProjects.sass';
import GrantCard from "../../../Components/GrantCard/GrantCard";
import { grantCard } from './grantCardsInfo';


const GrantProjects = () => {
  return (
    <div className='grantsProjects wrapper'>
      <div className="grantsProjects-content wrapper-container pl-31 pr-31 pt-13 pb-13 d-f fw-w jc-c">
        {grantCard.map( (card, i) => <GrantCard key={i} card={card}/>)}
      </div>
    </div>
  )
};


export default GrantProjects;