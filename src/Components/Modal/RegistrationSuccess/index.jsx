import React from 'react';
import s from './style.module.sass';
import Icon from '../../../Icons/Icons';
// import {modalOpen} from "../../../Store/Actions/modal/actionModal";
// import {connect} from "react-redux";


export const RegistrationSuccess = () => (
    <div className={`${s.regSuccess} pt-25 pb-25 pl-25 pr-25`}>
      <div className={`${s.regSuccess__headline} d-f jc-c`}>
        <Icon src="hello_icon" alt="hello.svg"/>
      </div>
      <div className={`${s.regSuccess__headline} d-f jc-c pt-10`}>
        <h6 className='h2-black fs-30 fw-700 lh-48 t-align-c'>You are successfully joined to Tribus</h6>
      </div>
    </div>
);
