import React from 'react';
import './ProjectCard.sass';

const path = 'img/community';
const placeholderImage = 'img/placeholder-image.jpg';
const placeholderAvatar = 'img/avatar-placeholder.png';


const ProjectCard = (props) => {

  const { idea, publisher, resource, supportersCount, supported } = props.item;

  return (
    <div className="projectCard pCard-adapt pl-10 pr-10 pt-5 pb-5 d-f fd-c">
      <div className="projectCard-container pCard-adapt__container">
        {/*<div className="projectCard-iconBlock pCard-adapt__iconBlock d-f ai-c">*/}
        {/*  <img className="iconBlock-icon" src={formatUrls.small} alt="small"/>*/}
        {/*  <div className="iconBlock-status d-f ai-c">*/}
        {/*    <img className="pl-7" src={image.status} alt=""/>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <img className="projectCard-image" onError={(e) => e.target.src = placeholderImage} src={resource !== null ? resource.formatUrls.small : placeholderImage } alt="loc"/>
        <div className="projectCard-avatar pCard-adapt__avatar d-f jc-c">
          <span className="projectCard-avatar__container">
            <img src={publisher.avatar !== null ? publisher.avatar.originalUrl : placeholderAvatar } alt="small"/>
          </span>
        </div>
        <div className="projectCard-info mb-2 pCard-adapt__info">
          <h3 className="projectCard-info__headline info-headline h2-black fs-19 ls-5 lh-22 fw-600 mt-2 t-align-c">
            {idea.title}
          </h3>
          <div className="projectCard-info__location info-location d-f ai-c jc-c mt-2">
            <img className="mr-1" src={`${path}/Location.svg`} alt="Loc!"/>
            <h6 className="h3-lightGrey fs-14 lh-22 ls-4 fw-500 als-c">
              {idea.address}
            </h6>
          </div>
          <button className="projectCard-info__owner info-owner fs-14 lh-22 ls-4 fw-500 blueFont mt-1 t-align-c" >
            Project by {publisher.name}
          </button>
          <p className="projectCard-info__description info-description mt-2 pl-5 pr-5 fs-15 lh-22 ls-5 fs-500 h6-greyFont t-align-l">
            {idea.description}
          </p>
          <a href='./#' className="projectCard-info__join info-join fs-16 lh-22 ls-5 fw-500 blueFont mt-12 t-align-c">
            Join the discussion
          </a>
        </div>
        <div className="projectCard-btn pCard-adapt__btn mb-4 pl-7 pr-7">
            <button
              className={ `${supported ? 'btn transparent' : 'btn green' } lg fs-16 ls-27 lh-18 fw-600 sh-btn-sm`}
         >
              {supported ? 'Supported' : 'Support' }
         </button>
        </div>
        <a href='./#' className="projectCard-supporters d-f jc-fs als-fs">
          <span className="fs-14 lh-22 ls-4 fw-500 h6-lightBlue t-align-l">{supportersCount} supporters</span>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;