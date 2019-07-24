import React from 'react';
import './Community.sass'
import ProjectCard from '../../../Components/ProjectCard/ProjectCard';
import { projectCard } from './projectCardsInfo';


class Community extends React.Component {
  render () {
    return (
      <div className="com wrapper">
        <div className="com-container wrapper-container">

            <div className="com-block com-adapt pl-31 pr-31 pt-32">
              <div className="com-block__headlines com-adapt__headlines pl-10 pb-12">
                <h2 className="fs-36 lh-36 ls-6 fs-700 h2-black t-align-l mb-2">What’s happening in your community?</h2>
                <h3 className="fs-22 lh-22 fs-500 h3-lightGrey t-align-l">3 Featured projects showing, 2 most viewed and least supported idea.</h3>
              </div>
              <div className="com-block__projectCards com-adapt__projectCards d-f fw-w">
                {projectCard.map( (card, i) => <ProjectCard key={i} card={card}/>)}
              </div>
            </div>
            <div className="com-block__btn com-adapt__btn pt-19 pb-46">
              <button className="btn blue sm-wide fs-16 lh-22 ls-24 fs-700 sh-btn-sm">
                Show more
              </button>
            </div>

        </div>
      </div>
    )
  };
};


export default Community;