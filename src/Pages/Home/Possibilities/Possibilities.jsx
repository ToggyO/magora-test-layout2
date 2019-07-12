import React from 'react';
import './Possibilities.sass'
import Card from './Card/Card';


import Group20 from '../../../img/possibilities/Group20.svg';
import HomeBussiness from '../../../img/possibilities/home-business.svg';
import Shape from '../../../img/Shape.svg';
import { ReactComponent as ShapeP } from '../../../img/Shape.svg';


const path = 'img/possibilities/cards';

const cards = [
  {
    url: `${path}/Group14.svg`,
    label: 'Engagement'
  },
  {
    url: `${path}/Group15.svg`,
    label: 'Crowdfunding'
  },
  {
    url: `${path}/Grants.svg`,
    label: 'Grants'
  },
  {
    url: `${path}/Group16.svg`,
    label: 'Volunteering'
  },
  {
    url: `${path}/Group17.svg`,
    label: 'Petitioning'
  },
  {
    url: `${path}/Group18.svg`,
    label: 'Event management'
  },
]


class Possibilities extends React.Component {

 render() {

    // const cards = cards;

   return (
     <div className="pos wrapper">
       <div className="pos-container wrapper-container">
         <div className="pos-container-content wrapper-container-content">

           <div className="pos-block1 block-adapt d-f pl-35 pr-35 pt-25 pb-25">
             <div className="pos-block1__container block-adapt__container d-f fd-c w-100 mt-18">
               <h2 className="block1-find block-adapt__find h2-black fs-40 lh-82 ls-5 fw-700 t-align-l">Find whats already happening</h2>
               <h4 className="block1-community block-adapt__community h2-black fs-27 lh-55 ls-4 fw-700 t-align-l">in your community</h4>
               <button className="block1-btn block-adapt__btn btn green sh-btn-lg xl d-f jc-c mt-10">
                 <ShapeP style={{minWidth: '19px'}} className="test" />
               </button>
             </div>
             <div className="pos-block1__image block-adapt__image d-f ai-c">
               <img src={Group20} alt="Group20"/>
             </div>
           </div>

           <div className="pos-block2 block-adapt d-f pl-35 pr-35">
             <div className="pos-block2__image block-adapt__image d-f">
               <img src={HomeBussiness} alt="HomeBussiness"/>
             </div>
             <div className="pos-block2__container block-adapt__container d-f fd-c mt-3 ml-15">
               <h2 className="block2-council-1 block-adapt__council-1 h2-black fs-40 lh-44 ls-5 fw-700 t-align-l">
                 Are you Council or a business?
               <br />
                 Register your interest now!
               </h2>
               <p className="block2-text block-adapt__text h2-black fs-25 lh-41 ls-4 fw-500 mt-2 t-align-l">
                 Tribus brings people, businesses and councils together to improve local communities. We’re here to help your ideas become a reality.
               </p>
               <div className="block2-btn block-adapt__btn mt-10">
                 <button className=" btn btn green sh-btn-sm xl fs-18 lh-18 ls-27 fw-500 d-f jc-c">
                   Register now!
                 </button>
               </div>
              </div>
           </div>

           <div className="pos-block3 pl-36 pr-36 pt-32 pb-35">
             <h2 className="pos-block3__label h2-black fs-36 lh-41 ls-6 fw-700 t-align-l">
               The tools you need to get things done!
             </h2>
             <div className="pos-block3__cards d-f fw-w mt-17">
               {cards.map( (card, i) =>
                   {
                   return <Card key={i} url={card.url} label={card.label}/>
                   }
                 )
               }
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 }
};


export default Possibilities;