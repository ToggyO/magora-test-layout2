import React from 'react';
import './Header.sass'
import LoggedIn from './LoggedIn/Logged';
import LoggedOut from './LoggedOut/LoggedOut';
// import logo from '../../../img/logo-green.svg';
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
            {/*<img src={logo} alt="logo" className="header-container-content-logo als-c"/>*/}
            <div className="header__logo als-c"></div>
            <div className="header__nav d-f ai-c">
              <div className="header__nav-search d-f ai-c mr-12 h4-darkGrey fs-16 lh-22 ls-24 fw-600">
                <Shape className="test" />
              </div>
              <h4 className="header__nav-works mr-12 h4-darkGrey fs-16 lh-22 ls-24 fw-600">
                How Tribus Works
              </h4>
              <button
                style={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.18)'}}
                className="header-changeGroup-create btn green sm fs-18 lh-18 ls-27 fw-600 sh-btn-sm mr-12"
                onClick={this.SwitchPanel}
              >
                Create Project
              </button>
              { this.state.loggedIn ? <LoggedIn /> : <LoggedOut /> }
            </div>
          </div>
        </div>
      </header>
    );
  }

};

export default Header;