import React from 'react';
import MenuItem from '../MenuItem';


export const Menu = (list, selected) => list
  .map((el, i) => {
    const { title, value } = el;
    return <MenuItem
      keyNumber={i}
      title={title}
      value={value}
      key={title}
      userId={this.props.userId}
      tabQuery={this.props.tabQuery}
      pushTabQuery={this.props.pushTabQuery}
      toggleActive={this.props.toggleActive}
      location={this.props.location}
      active={this.props.active}
      selected={selected}
    />;
  });
