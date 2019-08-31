import React from 'react';
import './Possibilities.sass';
import PosSearch from './pos-search/pos-search';
import PosReg from './pos-reg/pos-reg';
import PosTools from './pos-tools/pos-tools';

/* eslint-disable class-methods-use-this */
class Possibilities extends React.Component {
  render() {
    return (
     <div className="pos wrapper">
       <div className="pos-container wrapper-container">
         <PosSearch />
         <PosReg />
         <PosTools />
       </div>
     </div>
    );
  }
}


export default Possibilities;
