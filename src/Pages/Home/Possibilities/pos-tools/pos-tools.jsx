import React from 'react';
import './pos-tools.sass'
import Card from './Card/Card';

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

const PosTools = () => {
  return (
   <div className="pos-tools pl-36 pr-36 pt-32 pb-35">
     <h2 className="pos-tools__label h2-black fs-36 lh-41 ls-6 fw-700 t-align-l">
       The tools you need to get things done!
     </h2>
     <div className="pos-tools__cards d-f fw-w jc-c">
       {cards.map( (card, i) =>
           {
           return <Card key={i} url={card.url} label={card.label}/>
           }
         )
       }
     </div>
   </div>
   );
};


export default PosTools;