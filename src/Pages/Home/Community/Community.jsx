import React from 'react';
import './Community.sass'
import ProjectCard from '../../../Components/ProjectCard/ProjectCard';

const path = 'img/community';

const projectCard = [
  {
    image: {
      icon: `${path}/Grant.svg`,
      status: `${path}/council_project.png`,
      image: `${path}/Bitmap.png`,
      avatar: `${path}/avatar.png`,
      location: `${path}/Location.svg`
    },
    information: {
      head: 'Blue Light Disco',
      location: 'Geelong',
      owner: 'Rebecca',
      description: 'Blue light discos for Geelong kids and the young at heart! Dancing to motivate body\n' +
        '          and soul, for every… age.',
      join: 'Join the discussion'
    },
    button: {
      class: 'btn transparent lg fs-16 ls-27 lh-18 fw-600',
      value: 'Supported project'
    },
    support: '5'
  },
  {
    image: {
      icon: `${path}/Grant2.svg`,
      status: `${path}/community_project.png`,
      image: `${path}/Bitmap.png`,
      avatar: `${path}/avatar.png`,
      location: `${path}/Location.svg`
    },
    information: {
      head: 'Blue Light Disco',
      location: 'Geelong',
      owner: 'Rebecca',
      description: 'Blue light discos for Geelong kids and the young at heart! Dancing to motivate body\n' +
        '          and soul, for every… age.',
      join: 'Join the discussion'
    },
    button: {
      class: 'btn green lg fs-16 ls-27 lh-18 fw-600',
      value: 'Support project'
    },
    support: '4'
  },
  {
    image: {
      icon: `${path}/Grant2.svg`,
      status: `${path}/community_project.png`,
      image: `${path}/Bitmap.png`,
      avatar: `${path}/avatar.png`,
      location: `${path}/Location.svg`
    },
    information: {
      head: 'Blue Light Disco',
      location: 'Geelong',
      owner: 'Rebecca',
      description: 'Blue light discos for Geelong kids and the young at heart! Dancing to motivate body\n' +
        '          and soul, for every… age.',
      join: 'Join the discussion'
    },
    button: {
      class: 'btn green lg fs-16 ls-27 lh-18 fw-600',
      value: 'Support project'
    },
    support: '7'
  },
  {
    image: {
      icon: `${path}/Grant2.svg`,
      status: `${path}/community_project.png`,
      image: `${path}/Bitmap.png`,
      avatar: `${path}/avatar.png`,
      location: `${path}/Location.svg`
    },
    information: {
      head: 'Blue Light Disco',
      location: 'Geelong',
      owner: 'Rebecca',
      description: 'Blue light discos for Geelong kids and the young at heart! Dancing to motivate body\n' +
        '          and soul, for every… age.',
      join: 'Join the discussion'
    },
    button: {
      class: 'btn green lg fs-16 ls-27 lh-18 fw-600',
      value: 'Support project'
    },
    support: '7'
  },
  {
    image: {
      icon: `${path}/Grant2.svg`,
      status: `${path}/community_project.png`,
      image: `${path}/Bitmap.png`,
      avatar: `${path}/avatar.png`,
      location: `${path}/Location.svg`
    },
    information: {
      head: 'Blue Light Disco',
      location: 'Geelong',
      owner: 'Rebecca',
      description: 'Blue light discos for Geelong kids and the young at heart! Dancing to motivate body\n' +
        '          and soul, for every… age.',
      join: 'Join the discussion'
    },
    button: {
      class: 'btn green lg fs-16 ls-27 lh-18 fw-600',
      value: 'Support project'
    },
    support: '7'
  }
];

class Community extends React.Component {

  render () {
    return (
      <div className="com wrapper">
        <div className="com-container wrapper-container">
          <div className="com-container-content wrapper-container-content">
            <div className="com-block com-adapt pl-31 pr-31 pt-32">
              <div className="com-block__headlines com-adapt__headlines pl-10 pb-12">
                <h2 className="fs-36 lh-36 ls-6 fs-700 h2-black t-align-l mb-2">What’s happening in your community?</h2>
                <h3 className="fs-22 lh-22 fs-500 h3-lightGrey t-align-l">3 Featured projects showing, 2 most viewed and least supported idea.</h3>
              </div>
              <div className="com-block__projectCards com-adapt__projectCards d-f fw-w">
                {projectCard.map( (card, i) =>
                    {
                      return (
                        <ProjectCard
                          key={i}
                          card={card}
                        />
                      )
                    }
                  )
                }
              </div>
            </div>
            <div className="com-block__btn com-adapt__btn pt-19 pb-46">
              <button className="btn blue sm-wide fs-16 lh-22 ls-24 fs-700 sh-btn-sm">
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  };
};


export default Community;