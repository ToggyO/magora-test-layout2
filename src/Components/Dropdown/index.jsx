import React from "react";
import style from './style.module.sass';
import {NavLink} from "react-router-dom";


const Dropdown = (props) => {

  const {
    opened,
    list,
  } = props;

  return <ul className={`${style.list_dropdown} ${opened ? `${style.dropdown_active}` : ''}`}>

            {list.map(item => <li className={style.list_dropdown__item}>
              <NavLink
                to={item.link}
                className={style.list_dropdown__link}
              >
                {item.title}
              </NavLink>
              </li>
            )}

         </ul>
};


export default Dropdown;