import React from 'react';
import './Main.sass';
import Form from '../../Form/Form';


class Main extends React.Component {
  render() {
    return (
      <div className='main wrapper'>
        <div className="main-container wrapper-container">
          <div className="main-container-content wrapper-container-content pt-25 pb-30 pl-106 pr-106">

            <Form />
          </div>
        </div>
      </div>
    );
  };
};


export default Main;