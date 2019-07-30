import React from 'react';
import './EventCard.sass';


const EventCard = (props) => {

  const { image, information, } = props.card;
  const { onClick } = props;

  return (
    <div className="eventCard eVcard-adapt pl-10 pr-10 pt-5 pb-5">
      <div className="eventCard-container eVcard-adapt__container">
        <div className="eventCard-iconBlock eVcard-adapt__iconBlock d-f ai-c">
          <img className="iconBlock-icon" src={image.icon} alt=""/>
          <div className="iconBlock-status d-f ai-c">
            <img className="pl-7" src={image.status} alt=""/>
          </div>
        </div>
        <img className="eventCard-image" src={image.image} alt=""/>
        <div className="eventCard-info mb-2 eVcard-adapt__info">
          <h3 className="eventCard-info__headline info-headline h2-black fs-24 ls-5 lh-22 fw-600 mt-2 t-align-c">
            {information.head}
          </h3>
          <div className="eventCard-info__location info-location d-f ai-c jc-c mt-2">
            <img className="mr-1" src={image.location} alt=""/>
            <h6 className="h3-lightGrey fs-12 lh-22 ls-4 fw-500 als-c">
              {information.location}
            </h6>

          </div>
          <div className='d-f jc-c'>
            <h6 className="h3-lightGrey fs-12 lh-22 ls-4 fw-500 als-c">
              {information.date}
            </h6>
          </div>
          <button className="eventCard-info__owner info-owner fs-16 lh-22 ls-4 fw-500 blueFont mt-1 t-align-c mt-6" >
            Read more
          </button>
        </div>
        <div className="eventCard-btn eVcard-adapt__btn mb-4 pl-7 pr-7">
          <button
            className={`btn green lg sh-btn-sm`}
            onClick={ () => {
              onClick();
              console.log(props.state);

              }
            }
          >
            { props.state ? 'Attended event' : 'Attend' }
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;


// ${button.class}