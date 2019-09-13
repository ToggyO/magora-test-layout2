import React from 'react';
import { connect } from 'react-redux';
import './pos-tools.sass';
import Card from './Card/Card';
import { modalOpen } from '../../../../Store/Actions/modal/actionModal';

const cards = [
  {
    url: 'modal-engagement',
    label: 'Engagement',
    name: 'engagement',
  },
  {
    url: 'modal-crowdfunding',
    label: 'Crowdfunding',
    name: 'crowdfunding',
  },
  {
    url: 'modal-grants',
    label: 'Grants',
    name: 'grants',
  },
  {
    url: 'modal-volunteering',
    label: 'Volunteering',
    name: 'volunteering',
  },
  {
    url: 'modal-petitioning',
    label: 'Petitioning',
    name: 'petitioning',
  },
  {
    url: 'modal-events',
    label: 'Event management',
    name: 'event_management',
  },
];

const PosTools = () => (
   <div className="pos-tools pl-36 pr-36 pt-32 pb-35">
     <h2 className="pos-tools__label h2-black fs-36 lh-41 ls-6 fw-700 t-align-l">
       The tools you need to get things done!
     </h2>
     <div className="pos-tools__cards">
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
