import React from 'react';
import './Header.sass'
import Logged from './Logged/Logged';
import logo from '../../../img/logo-green.svg';
import { ReactComponent as Shape } from '../../../img/Shape.svg';

const Header = () => {
  return (

      <header className="header wrapper sh-header">
        <div className="header-container wrapper-container ">
          <div className="header-container-content wrapper-container-content d-f jc-sb pl-7 pr-6">
            <img src={logo} alt="logo" className="header-logo als-c"/>
            <div className="header-nav d-f ai-c">
              <div className="header-search d-f ai-c mr-12 h4-darkGrey fs-16 lh-22 ls-24 fw-600">
                <Shape className="test" />
              </div>
              <h4 className="mr-12 h4-darkGrey fs-16 lh-22 ls-24 fw-600">How Tribus Works</h4>
              <Logged />
            </div>
          </div>
        </div>
      </header>

  );
}

export default Header;