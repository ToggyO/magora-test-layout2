import React from 'react';
import '../ProjectCard/ProjectCard.sass';
import '../GrantCard/GrantCard.sass';
import Icon from "../../Icons/Icons";


const GrantCard = (props) => {

  const { grant, publisher, resource, location } = props.item;

  return (
    <div className="projectCard pCard-adapt pl-10 pr-10 pt-5 pb-5">
      <div className="grantsCard-container pCard-adapt__container">
        {/*<div className="grantCard-iconBlock pCard-adapt__iconBlock d-f ai-c">*/}
        {/*  <img className="iconBlock-icon" src={image.icon} alt=""/>*/}
        {/*  <div className="iconBlock-status d-f ai-c">*/}
        {/*    <img className="pl-7" src={image.status} alt=""/>*/}
        {/*  </div>*/}
        {/*</div>*/}
        { resource !== null
          ? <img
            className="projectCard-image"
            // onError={(e) => e.target.src = placeholderImage}
            src={resource.formatUrls.small}
            alt="loc"
          />
          : <Icon iconName='placeholder_image' />
        }
        <div className="projectCard-avatar pCard-adapt__avatar d-f jc-c">
          <span className="projectCard-avatar__container">

            { publisher.avatar !== null
              ?  <img
                // onError={(e) => e.target.src = placeholderAvatar}
                src={publisher.avatar.originalUrl}
                alt="small"
              />
              : <Icon iconName='avatar' className='avatar_card'/>
            }

          </span>
        </div>
        <div className="projectCard-info mb-2 pCard-adapt__info">
          <h3 className="projectCard-info__headline info-headline h2-black fs-24 ls-5 lh-22 fw-600 mt-2 t-align-c">
            {grant.title}
          </h3>
          <h3 className='greenFont fs-24 lh-22 ls-5 fw-600 t-align-c mt-4'>
            $ {grant.amount}
          </h3>
          <div className="projectCard-info__location info-location d-f ai-c jc-c mt-2">
            <div>
              <Icon
                iconName='location_icon'
                className='mr-1'
              />
            </div>
            <h6 className="h3-lightGrey fs-14 lh-22 ls-4 fw-500 als-c">
              {location.areaName}
            </h6>
          </div>
          <button className="projectCard-info__owner info-owner fs-14 lh-22 ls-4 fw-500 blueFont mt-1 t-align-c" >
            Grant by {publisher.name}
          </button>
          <p className="projectCard-info__description info-description mt-2 pl-5 pr-5 fs-15 lh-22 ls-5 fs-500 h6-greyFont t-align-l">
            {grant.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GrantCard;