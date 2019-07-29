import React from 'react';
import './GrantCard.sass';


const GrantCard = (props) => {

  const { image, information, cost } = props.card;

  return (
    <div className="grantCard pCard-adapt pl-10 pr-10 pt-5 pb-5">
      <div className="grantCard-container pCard-adapt__container">
        <div className="grantCard-iconBlock pCard-adapt__iconBlock d-f ai-c">
          <img className="iconBlock-icon" src={image.icon} alt=""/>
          <div className="iconBlock-status d-f ai-c">
            <img className="pl-7" src={image.status} alt=""/>
          </div>
        </div>
        <img className="grantCard-image" src={image.image} alt=""/>
        <div className="grantCard-info mb-2 pCard-adapt__info">
          <h3 className="grantCard-info__headline info-headline h2-black fs-24 ls-5 lh-22 fw-600 mt-2 t-align-c">
            {information.head}
          </h3>
          <h3 className='greenFont fs-24 lh-22 ls-5 fw-600 t-align-c mt-4'>
            {information.cost}
          </h3>
          <div className="grantCard-info__location info-location d-f ai-c jc-c mt-2">
            <img className="mr-1" src={image.location} alt=""/>
            <h6 className="h3-lightGrey fs-14 lh-22 ls-4 fw-500 als-c">
              {information.location}
            </h6>
          </div>
          <button className="grantCard-info__owner info-owner fs-14 lh-22 ls-4 fw-500 blueFont mt-1 t-align-c" >
            Grant by {information.owner}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GrantCard;