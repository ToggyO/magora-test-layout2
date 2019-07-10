import React from 'react';
import './Possibilities.sass'


class Possibilities extends React.Component {

  cards = [
    {
      url: '',
      label: ''
    },
    {
      url: '',
      label: ''
    },
    {
      url: '',
      label: ''
    },
    {
      url: '',
      label: ''
    },
    {
      url: '',
      label: ''
    },
    {
      url: '',
      label: ''
    },
  ]

 render() {
   return (
     <div className="pos wrapper">
       <div className="pos-container wrapper-container">
         <div className="pos-container-content wrapper-container-content">

           <div className="pos-container-content-block1">
             <h2 className="pos-container-content-block1-find">Find whats already happening</h2>
             <h4 className="pos-container-content-block1-community">in your community</h4>
             <div className="pos-container-content-block1-image">
               <div></div>
             </div>
           </div>

           <div className="pos-container-content-block2">
             <div className="pos-container-content-block2-image">
               <div></div>
             </div>
             <h2 className="pos-container-content-block2-council">
               Are you Council or a business?
               Register your interest now!
             </h2>
             <p className="pos-container-content-block2-text">
               Tribus brings people, businesses and councils together to improve local communities. We’re here to help your ideas become a reality.
             </p>
           </div>

           <div className="pos-container-content-block3">
             <h2 className="pos-container-content-block3-label">
               The tools you need to get things done!
             </h2>
             <div className="pos-container-content-block2-cards">
               <div className="pos-container-content-block2-cards-card1">
                 <div id="card1-image"></div>
                 <h3>Engagement</h3>
               </div>

               <div className="pos-container-content-block2-cards-card1">
                 <div id="card1-image"></div>
                 <h3>Engagement</h3>
               </div>

               <div className="pos-container-content-block2-cards-card1">
                 <div id="card1-image"></div>
                 <h3>Engagement</h3>
               </div>

               <div className="pos-container-content-block2-cards-card1">
                 <div id="card1-image"></div>
                 <h3>Engagement</h3>
               </div>

               <div className="pos-container-content-block2-cards-card1">
                 <div id="card1-image"></div>
                 <h3>Engagement</h3>
               </div>
             </div>

           </div>
         </div>
       </div>
     </div>
   );
 }
};


export default Possibilities;