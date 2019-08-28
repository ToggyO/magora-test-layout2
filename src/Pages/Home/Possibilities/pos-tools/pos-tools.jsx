import React from 'react';
import { connect } from 'react-redux';
import './pos-tools.sass';
import Card from './Card/Card';
import { modalOpen } from '../../../../Store/Actions/modal/actionModal';

const path = 'img/possibilities/cards';

const cards = [
  {
    url: `${path}/Group14.svg`,
    label: 'Engagement',
    name: 'engagement',
  },
  {
    url: `${path}/Group15.svg`,
    label: 'Crowdfunding',
    name: 'crowdfunding',
  },
  {
    url: `${path}/Grants.svg`,
    label: 'Grants',
    name: 'grants',
  },
  {
    url: `${path}/Group16.svg`,
    label: 'Volunteering',
    name: 'volunteering',
  },
  {
    url: `${path}/Group17.svg`,
    label: 'Petitioning',
    name: 'petitioning',
  },
  {
    url: `${path}/Group18.svg`,
    label: 'Event management',
    name: 'event_management',
  },
];

const PosTools = () => (
   <div className="pos-tools pl-36 pr-36 pt-32 pb-35">
     <h2 className="pos-tools__label h2-black fs-36 lh-41 ls-6 fw-700 t-align-l">
       The tools you need to get things done!
     </h2>
     <div className="pos-tools__cards d-f fw-w jc-c">
       {cards.map((card, i) => <Card key={i} card={card}/>)}
     </div>
   </div>
);

const mapDispatchToProps = (dispatch) => ({
  openModal: (i) => {
    dispatch(modalOpen(i));
  },
});

export default connect(null, mapDispatchToProps)(PosTools);
