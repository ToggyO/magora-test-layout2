import React from 'react';
import './Banner.sass';


const Banner = () => {
  return (
      <div className="banner wrapper">
        <div className="banner-container wrapper-container d-f jc-c ai-c">
          <div className="banner-container-content d-f fd-c">
            <div className="banner-headlines">
              <h1 className="h2-white fs-75 ls-9 lh-82 fw-700 ml-35 mr-35">Pitch your idea</h1>
              <h1 className="h2-white fs-40 ls-6 lh-55 fw-700 mb-10 ml-35 mr-35">to improve your community</h1>
            </div>
            <div className="banner-search-block">
              <form action="" className="search-block-form wrapper d-f">
                <input className=" search-block-input sh-inputLarge input-lg ml-35 w-45" type="text" placeholder="Describe your idea"/>
                <button className="btn green md fs-18 ls-27 lh-18 fw-500 ml-20 sh-btn-lg mr-35 w-15">Create project</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Banner;