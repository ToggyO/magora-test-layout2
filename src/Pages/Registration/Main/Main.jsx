import React from 'react';
import './Main.sass';
import Form from './Form/Form';


class Main extends React.Component {
  render() {
    return (
      <div className='main wrapper'>
        <div className="main-container wrapper-container">
          <div className="main-container-content wrapper-container-content pt-25 pb-30 pl-106 pr-106">
            <div className="main-form">
              <div className="main-form__headline">
                <h2 className='h2-black fs-24 lh-30 ls-3 fw-700 mb-10'>Join the Tribus community</h2>
              </div>
              <Form />
            </div>
          </div>
        </div>
      </div>
    );
  };
};


export default Main;