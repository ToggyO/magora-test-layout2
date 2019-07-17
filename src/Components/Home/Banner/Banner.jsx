import React from 'react';
import './Banner.sass';


const Banner = () => {
  return (
      <div className="banner wrapper">
        <div className="banner-container wrapper-container d-f jc-c ai-c">
          <div className="banner-container-content pl-25 pr-25 d-f fd-c">
            <div className="banner-headlines">
              <h1 id="pitch" className="h2-white fs-75 ls-9 lh-82 fw-700">Pitch your idea</h1>
              <h1 id="improve" className="h2-white fs-40 ls-6 lh-55 fw-700 mb-10 ">to improve your community</h1>
            </div>
            <div className="banner-search__block">
              <form action="" className="search-block__form wrapper d-f">
                <input className="search-block__input sh-inputLarge input-lg h6-skyFont fs-16 w-75 pl-10" type="text" placeholder="Describe your idea"/>
                <button className="search-block__create btn green md fs-18 ls-27 lh-18 fw-600 ml-20 w-25 sh-btn-lg">Create project</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Banner;