import React from 'react';
import './Header.sass'
import Logged from './Logged/Logged';
import logo from '../../../img/logo-green.svg';

const Header = () => {
  return (

      <header className="header wrapper sh-header">
        <div className="header-container wrapper-content d-f jc-sb pl-7 pr-6">
          <img src={logo} alt="" className="header-logo"/>
          <div className="header-nav d-f ai-c">
            <h4 className="mr-12">Find</h4>
            <h4 className="mr-12">How Tribus Works</h4>
            <Logged />
          </div>
        </div>
      </header>

  );
}

export default Header;