import React from 'react';
import './CommunityProjects.sass';
import ProjectCard from "../../../Components/ProjectCard/ProjectCard";

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


const CommunityProjects = () => {
  return (
    <div className='communityProjects wrapper'>
      <div className="communityProjects-container wrapper-container">
        <div className="communityProjects-content wrapper-container-content pl-31 pr-31 pt-13 pb-13 d-f fw-w">
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
    </div>
  )
};


export default CommunityProjects;