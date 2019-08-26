import React from 'react';
// import './style.sass';


const Info = (props) => {

  const { title, value } = props;

  return <div className='mt-5'>
          <div className='about-profile__title'>
            <h6 className='h2-black fs-24 lh-43 ls-4 fw-600'>{title}</h6>
          </div>
          <div className='about-profile__link '>
            <a href='#' className='h2-black fs-16 lh-24 ls-2 fw-500'>{value}</a>
          </div>
        </div>
};


export default Info;