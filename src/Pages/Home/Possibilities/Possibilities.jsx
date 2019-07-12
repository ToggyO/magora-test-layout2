import React from 'react';
import './Possibilities.sass'
import Block1 from './Block1/Block1';
import Block2 from './Block2/Block2';
import Block3 from './Block3/Block3';


class Possibilities extends React.Component {

 render() {
   return (
     <div className="pos wrapper">
       <div className="pos-container wrapper-container">
         <div className="pos-container-content wrapper-container-content">
           <Block1 />
           <Block2 />
           <Block3 />
         </div>
       </div>
     </div>
   );
 }
};


export default Possibilities;