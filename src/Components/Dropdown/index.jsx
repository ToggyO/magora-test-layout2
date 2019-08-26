import React from 'react';
import PropTypes from 'prop-types';
// import { ArrowDownIcon } from 'components';
import classNames from 'classnames';
import './style.sass';


export class Dropdown extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    list: PropTypes.arrayOf(PropTypes.node),
    position: PropTypes.string,
    menuClassName: PropTypes.string,
    listClassName: PropTypes.string,
    arrowClassName: PropTypes.string,
  };
  static defaultProps = {
    disabled: false,
    list: [],
    position: 'left',
    menuClassName: '',
    listClassName: '',
    arrowClassName: '',
  };
  state = {
    showMenu: false,
  };
  menu = React.createRef();
  menuButton = React.createRef();
  outsideClickListener = (e) => {
    if (!this.menu.current.contains(e.target) && !this.menuButton.current.contains(e.target)) {
      this.toggleMenu();
    }
  };
  toggleMenu = () => {
    const { disabled } = this.props;
    if (disabled) {
      return;
    }

    if (this.state.showMenu) {
      this.setState({ showMenu: false });
      window.document.removeEventListener('touchstart', this.outsideClickListener, false);
      window.document.removeEventListener('mousedown', this.outsideClickListener, false);
    } else {
      this.setState({ showMenu: true });
      window.document.addEventListener('touchstart', this.outsideClickListener, false);
      window.document.addEventListener('mousedown', this.outsideClickListener, false);
    }
  };
  render() {
    const { children = null, list, menuClassName, listClassName, position, elementClassName } = this.props;
    const { showMenu } = this.state;
    return (
      <div className={classNames('dropdown-menu', menuClassName)}>
        <div
          ref={this.menuButton}
          onClick={() => {
            this.toggleMenu();
          }}
          className="dropdown-menu__button">
          {children}
        </div>
        <ul
          ref={this.menu}
          className={classNames('dropdown-menu__list', listClassName, `_${position}`)}
          style={{ display: !showMenu ? 'none' : 'block' }}>
          {list.map((listItem, index) => (
            <li
              className={classNames("dropdown-menu__list-element", elementClassName)}
              key={index}
              onClick={() => {
                this.toggleMenu();
              }}>
              {listItem}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
