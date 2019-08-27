import React from 'react';
import Icon from '../../Icons/Icons';
import s from './style.module.sass';


const Preloader = (props) => {
  const { style } = props;

  return <div
    className={s.preloader}
    style={style}
  >
    <Icon iconName='preloader'/>
  </div>;
};

export default Preloader;
