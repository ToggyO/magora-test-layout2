import React from 'react';
import './Footer.sass'


import logo from '../../img/footer/logo-green.svg';


class Footer extends React.Component {

  render () {
    return (
      <footer className="footer wrapper">

        <div className="footer-line">
          <div className='footer-line-container wrapper-container'>
            <div className="footer-line-content wrapper-container-content pt-11 pb-11">

              <div className="line-container d-f jc-sb">
                <h2 className="line-container__headline h2-white fs-44 lh-50 ls-12 fw-700 d-f jc-fs">
                  Keep up to date with Tribus
                </h2>
                <div className="line-container__btn d-f jc-fe">
                  <button className='btn white sm-wide sh-btn-sm fs-16 lh-22 ls-24 fw-700'>Subscribe</button>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="footer-container wrapper-container">
          <div className="footer-container-content wrapper-container-content">


            <div className="footer-contacts pl-57 pr-57 pt-25 pb-45 d-f jc-sb">
              <div className="footer-contacts__item d-f fd-c">
                <h5 className='lightenBlueFont t-align-l mb-5 fs-18 lh-24 ls-5 fw-700'>Getting Started</h5>
                <button className='btn btnHref'>
                  <a href='./#'>How Tribus Works</a>
                </button>
                <button className='btn btnHref'>
                  <a href='./#'>Tribus FAQs</a>
                </button>
                <button className='btn btnHref'>
                  <a href='./#'>Explore projects</a>
                </button>
                <button className='btn btnHref'>
                  <a href='./#'>Create a project</a>
                </button>
                <button className='btn btnHref'>
                  <a href='./#'>Log out</a>
                </button>
              </div>
              <div className="footer-contacts__item d-f fd-c">
                <h5 className='lightenBlueFont t-align-l mb-5 fs-18 lh-24 ls-5 fw-700'>About</h5>
                <button className='btn btnHref'>
                  <a href='./#'>About Tribus</a>
                </button>
                <button className='btn btnHref'>
                  <a href='./#'>Contact us</a>
                </button>
                <button className='btn btnHref'>
                  <a href='./#'> Terms and Conditions</a>
                </button>
                <button className='btn btnHref'>
                  <a href='./#'>Privacy and Policy</a>
                </button>
              </div>
              <div className="footer-contacts__item d-f jc-fs">
                <img src={logo} alt="logo"/>
              </div>
            </div>

          </div>
        </div>
      </footer>
    )
  };
};


export default Footer;