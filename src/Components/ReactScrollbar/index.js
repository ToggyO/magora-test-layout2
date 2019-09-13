import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import PropTypes from 'prop-types';
import './style.sass';


/* eslint-disable */
const list = [
  { name: 'item1', value: 'fff' },
  { name: 'item2______________' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
  { name: 'item7______________' },
  { name: 'item8' },
  { name: 'item9' },
  { name: 'item10' },
  { name: 'item11' },
  { name: 'item12' },
  { name: 'item13' },
  { name: 'item14______________' },
  { name: 'item15' },
  { name: 'item16' },
  { name: 'item17' },
  { name: 'item18' },
  { name: 'item19' },
  { name: 'item20' },
  { name: 'item21' },
  { name: 'item22______________' },
  { name: 'item23' },
  { name: 'item24' },
  { name: 'item25' },
];

// eslint-disable-next-line react/prop-types
const MenuItem = ({text, value, selected}) => {
  debugger;
  return <div className={`menu-item ${selected ? 'active' : ''}`}>{text}</div>;
};

export const Menu = (list, selected) =>
  list.map(el => {
    const {name, value} = el;
    const onClick = () => console.log('original onClick ', name);
    return <MenuItem text={name} value={value} key={name} selected={selected} onClick={onClick} />;
  });

const Arrow = ({text, className}) => {
  return <div className={className}>{text}</div>;
};
Arrow.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export const ArrowLeft = Arrow({text: '<', className: 'arrow-prev'});
export const ArrowRight = Arrow({text: '>', className: 'arrow-next'});

class ReactScrollbar extends React.Component {
  state = {
    alignCenter: true,
    clickWhenDrag: false,
    dragging: true,
    hideArrows: true,
    hideSingleArrow: true,
    itemsCount: list.length,
    selected: 'item1',
    scrollToSelected: true,
    translate: undefined,
    transition: 0.4,
    wheel: true,
    showList: true,
    inertiascrolling: false,
    slowdownFactor: 0.25,
  };

  constructor(props) {
    super(props);
    this.menu = null;
    this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
  }

  componentDidUpdate(prevProps, prevState) {
    const {alignCenter} = prevState;
    const {alignCenter: alignCenterNew} = this.state;
    if (alignCenter !== alignCenterNew && this.menu) {
      this.menu.setInitial();
      this.menu.forceUpdate();
      this.forceUpdate();
    }
  }

  onUpdate = ({translate}) => {
    console.log(
      // `onUpdate: translate: ${translate} firstItemVisible: ${firstItemVisible}, lastItemVisible: ${lastItemVisible}`
      `onUpdate: translate: ${translate}`
    );
    this.setState({translate});
  };

  onSelect = key => {
    console.log(`onSelect: ${key}`);
    this.setState({selected: key});
  };

  setItemsCount = ev => {
    const {itemsCount = list.length, selected} = this.state;
    const val = +ev.target.value;
    const itemsCountNew =
      !isNaN(val) && val <= list.length && val >= 0
        ? +ev.target.value
        : list.length;
    const itemsCountChanged = itemsCount !== itemsCountNew;

    if (itemsCountChanged) {
      this.menuItems = Menu(list.slice(0, itemsCountNew), selected);
      this.setState({
        itemsCount: itemsCountNew,
      });
    }
  };

  setSlowdownFactor = ev => {
    this.setState({slowdownFactor: ev.target.value});
  };

  setSelected = ev => {
    const {value} = ev.target;
    this.setState({selected: String(value)});
  };

  toggle = () => {
    this.setState({ showList: !this.state.showList });
  };

  render() {
    const {
      alignCenter,
      clickWhenDrag,
      hideArrows,
      dragging,
      hideSingleArrow,
      itemsCount,
      selected,
      translate,
      transition,
      wheel,
      showList,
      scrollToSelected,
      inertiascrolling,
      slowdownFactor,
    } = this.state;

    const menu = this.menuItems;

    const checkboxStyle = {
      margin: '5px 10px',
    };
    const valueStyle = {
      margin: '5px 10px',
      display: 'inline-block',
    };

    return (
        <div>
          <button onClick={this.toggle}>Toggle Show/hide</button>
          { showList && (
            <ScrollMenu
              ref={el => (this.menu = el)}
              data={menu}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
              hideArrows={hideArrows}
              hideSingleArrow={hideSingleArrow}
              transition={+transition}
              onUpdate={this.onUpdate}
              onSelect={this.onSelect}
              scrollToSelected={scrollToSelected}
              selected={selected}
              scrollBy={0}
              translate={translate}
              alignCenter={alignCenter}
              dragging={dragging}
              clickWhenDrag={clickWhenDrag}
              wheel={wheel}
              inertiaScrolling={inertiascrolling}
              inertiaScrollingSlowdown={slowdownFactor}
              rtl={false}
            />
          )}
        </div>

    );
  }
}

export default ReactScrollbar;

