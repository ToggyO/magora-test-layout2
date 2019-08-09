import React from 'react';
import '../ProjectCard/ProjectCard.sass';
import './EventCard.sass';

const path = 'img/community';
const placeholderImage = 'img/placeholder-image.jpg';


const EventCard = (props) => {

  const { event, isGuest, resource, } = props.item;

  return (
    <div className="projectCard pCard-adapt pl-10 pr-10 pt-5 pb-5">
      <div className="eventCard-container pCard-adapt__container">
        {/*<div className="eventCard-iconBlock eVcard-adapt__iconBlock d-f ai-c">*/}
        {/*  <img className="iconBlock-icon" src={image.icon} alt=""/>*/}
        {/*  <div className="iconBlock-status d-f ai-c">*/}
        {/*    <img className="pl-7" src={image.status} alt=""/>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <img className="projectCard-image" onError={(e) => e.target.src = placeholderImage} src={resource.formatUrls.small } alt="loc"/>
        <div className="projectCard-info mb-2 pCard-adapt__info">
          <h3 className="projectCard-info__headline info-headline h2-black fs-24 ls-5 lh-22 fw-600 mt-2 t-align-c">
            {event.title}
          </h3>
          <div className="projectCard-info__location info-location d-f ai-c jc-c mt-2">
            <img className="mr-1" src={`${path}/Location.svg`} alt="Loc1"/>
            <h6 className="h3-lightGrey fs-12 lh-22 ls-4 fw-500 als-c">
              {event.address}
            </h6>

          </div>
          <div className='d-f jc-c'>
            <h6 className="h3-lightGrey fs-12 lh-22 ls-4 fw-500 als-c">
              From {event.startDate}
            </h6>
          </div>
          <div className='d-f jc-c'>
            <h6 className="h3-lightGrey fs-12 lh-22 ls-4 fw-500 als-c">
              To {event.endDate}
            </h6>
          </div>
          <button className="projectCard-info__join info-join fs-16 lh-22 ls-4 fw-500 blueFont mt-1 t-align-c mt-6" >
            Read more
          </button>
        </div>
        <div className="projectCard-btn pCard-adapt__btn mb-4 pl-7 pr-7">
          { !isGuest
            ? <button
                className={`btn green lg sh-btn-sm`}
              >
                Attend
              </button>
            : <button
                className={`btn transparent lg sh-btn-sm`}
              >
                Attended
              </button>
          }

        </div>
      </div>
    </div>
  );
};

export default EventCard;


// ${button.class}