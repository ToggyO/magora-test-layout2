import React from 'react';
import './Header.sass'
import LoggedIn from './LoggedIn/Logged';
import LoggedOut from './LoggedOut/LoggedOut';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Shape } from '../../img/Shape.svg';


class Header extends React.Component {

  state = {
    loggedIn: false
  };

  SwitchPanel = () => {
    this.setState({
        loggedIn: !this.state.loggedIn
      }
    );
  };

  render() {
    return (
      <header className="header wrapper sh-header">
        <div className="header-container wrapper-container ">
          <div className="header-container-content wrapper-container-content d-f pl-7 pr-6">
            <div className="header__logo als-c">
              <NavLink to='/'>
                <div></div>
              </NavLink>
            </div>
            <div className="header__nav d-f ai-c jc-fe">
              <div className="header__nav-list">
                <div className="header__nav-listContainer d-f ai-c jc-fe">
                  <div className="header__nav-search nav-adapt d-f ai-c h4-darkGrey fs-16 lh-22 ls-24 fw-600">
                    <Shape className="test" />
                  </div>
                  <h4 className="header__nav-works nav-adapt h4-darkGrey fs-16 lh-22 ls-24 fw-600 ml-12">
                    How Tribus Works
                  </h4>
                  <button
                    style={{boxShadow: '0 8px 16px 0 rgba(0,0,0,0.18)'}}
                    className="header__nav-create nav-adapt btn green sm fs-18 lh-18 ls-27 fw-600 sh-btn-sm ml-12"
                    onClick={this.SwitchPanel}
                  >
                    Create Project
                  </button>
                </div>

              </div>

              { this.state.loggedIn ? <LoggedIn /> : <LoggedOut /> }
            </div>
          </div>
        </div>
      </header>
    );
  }
}


export default Header;