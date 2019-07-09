import React from 'react';
import './Banner.sass';


const Banner = () => {
  return (
      <div className="banner wrapper">
        <div className="banner-container wrapper-container">
          <div className="banner-container-content">
            <div className="banner-headlines">
              <h1 className="h2-white fs-75 ls-9 lh-82 fw-700">Pitch your idea</h1>
              <h3 className="h2-white fs-40 ls-6 lh-55 fw-700">to improve your community</h3>
            </div>
            <div className="banner-search-block">
              <input className="banner-search sh-inputLarge input-lg" type="text" placeholder="Describe your idea"/>
              <button className="btn-green-lg sh-btn-lg">Create project</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Banner;