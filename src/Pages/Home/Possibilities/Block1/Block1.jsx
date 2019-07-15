import React from 'react';
import './Block1.sass'

import Group20 from '../../../../img/possibilities/Group20.svg';
import { ReactComponent as ShapeP } from '../../../../img/Shape.svg';

const Block1 = () => {
   return (
     <div className="pos-block1 block-adapt d-f pl-35 pr-35 pt-25 pb-25">
       <div className="pos-block1__container block-adapt__container d-f fd-c w-100 mt-18">
         <h2 className="block1-find block-adapt__headline headline headlines-pos h2-black fs-40 lh-44 ls-5 fw-700 t-align-l">Find whats already happening</h2>
         <h4 className="block1-community block-adapt__community headlines-pos h2-black fs-27 lh-55 ls-4 fw-700 t-align-l">in your community</h4>
         <div className="block1-btn block-adapt__btn d-f jc-fs mt-10">
           <button className="btn green sh-btn-lg xl d-f jc-c">
             <ShapeP style={{minWidth: '19px'}} className="test" />
           </button>
         </div>
       </div>
       <div className="pos-block1__image block-adapt__image d-f ai-c">
         <img src={Group20} alt="Group20"/>
       </div>
     </div>

   );
};


export default Block1;