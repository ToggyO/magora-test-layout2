import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import PropTypes from 'prop-types';
import './style.sass';
import MenuItem from './MenuItem';


/* eslint-disable */
const list = [
  { title: 'About', value: 'about' },
  { title: 'Projects', value: 'ideas' },
  { title: 'Engagement', value: 'engagements' },
  { title: 'Events', value: 'events' },
];

// eslint-disable-next-line react/prop-types
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
    selected: 'about',
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
    // this.menuItems = this.Menu(list.slice(0, list.length), this.state.selected);
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

  Menu = (list, selected) =>
    list.map((el, i) => {
      const {title, value} = el;

      return <MenuItem
        keyNumber={i}
        title={title}
        value={value}
        key={title}
        userId={this.props.userId}
        tabQuery={this.props.tabQuery}
        pushTabQuery={this.props.pushTabQuery}
        toggleActiveTab={this.props.toggleActiveTab}
        location={this.props.location}
        activeTab={this.props.activeTab}
        selected={selected}
      />;
    });

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

    // const menu = this.menuItems;
    const menu = this.Menu(list.slice(0, list.length), this.state.selected);

    return (
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
    );
  }
}

export default ReactScrollbar;

