import React from 'react';
import './Header.sass'
import LoggedIn from './LoggedIn/Logged';
import LoggedOut from './LoggedOut/LoggedOut';
import logo from '../../../img/logo-green.svg';
import { ReactComponent as Shape } from '../../../img/Shape.svg';

class Header extends React.Component {

  state = {
    loggedIn: false
  };

  SwitchPanel = () => {
    this.setState({
        ...this.state.loggedIn,
        loggedIn: !(this.state.loggedIn)
      }
    );
  };

  render() {



    return (
      <header className="header wrapper sh-header">
        <div className="header-container wrapper-container ">
          <div className="header-container-content wrapper-container-content d-f jc-sb pl-7 pr-6">
            <img src={logo} alt="logo" className="header-container-content-logo als-c"/>
            <div className="header-container-content-nav d-f ai-c">
              <div className="header-container-content-nav-search d-f ai-c mr-12 h4-darkGrey fs-16 lh-22 ls-24 fw-600">
                <Shape className="test" />
              </div>
              <h4 className="header-container-content-nav-works mr-12 h4-darkGrey fs-16 lh-22 ls-24 fw-600">How Tribus Works</h4>
              { this.state.loggedIn ? <LoggedIn onClick={this.SwitchPanel}/> : <LoggedOut onClick={this.SwitchPanel}/> }
            </div>
          </div>
        </div>
      </header>
    );
  }

};

export default Header;