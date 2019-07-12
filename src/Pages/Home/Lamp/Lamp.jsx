import React from 'react';
import './Lamp.sass'


class Lamp extends React.Component {

  render() {
    return (
      <div className="lamp wrapper">
        <div className="lamp-container wrapper-container d-f jc-fe pl-35 pr-35">
          <div className="lamp-container-content wrapper-container-content d-f fd-c jc-fs ai-c">
            <div className="lamp-block">
              <div className="lamp-block__headline lamp-items">
                <h2 className="h2-white fs-40 ls-11 lh-50 fw-700">
                  Meet the companies helping
                  <br />
                  power Tribus
                </h2>
              </div>
              <div className="lamp-block__text lamp-items">
                <p className="h2-white fs-24 lh-33 ls-6 fw-500">
                  See who’s helping support tribus and keeping the
                  <br />
                  platform free for all community members to use.
                </p>
              </div>
              <div className="lamp-block__btn lamp-items">
                <button className="btn transparent xl fs-16 ls-24 lh-22 fw-700">
                  View supporters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
};


export default Lamp;