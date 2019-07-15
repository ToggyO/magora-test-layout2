import React from 'react';
import './Block2.sass'

import HomeBussiness from '../../../../img/possibilities/home-business.svg';

const Block2 = () => {
   return (
     <div className="pos-block2 block-adapt d-f pl-35 pr-35">
       <div className="pos-block2__image block-adapt__image d-f">
         <img src={HomeBussiness} alt="HomeBussiness"/>
       </div>
       <div className="pos-block2__container block-adapt__container d-f fd-c mt-3 ml-15">
         <h2 className="block2-council block-adapt__headline headlines-pos h2-black fs-40 lh-44 ls-5 fw-700 t-align-l als-fs">
           Are you Council or a business?
         <br />
           Register your interest now!
         </h2>
         <p className="block2-text block-adapt__text headlines-pos h2-black fs-25 lh-41 ls-4 fw-500 mt-5 t-align-l">
           Tribus brings people, businesses and councils together to improve local communities. We’re here to help your ideas become a reality.
         </p>
         <div className="block2-btn block-adapt__btn mt-10">
           <button className="btn btn green sh-btn-sm xl fs-18 lh-18 ls-27 fw-500 d-f jc-c">
             Register now!
           </button>
         </div>
        </div>
     </div>
   );
};


export default Block2;