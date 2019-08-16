import React from 'react';
import './pos-reg.sass'
import HomeBussiness from '../../../../img/possibilities/home-business.svg';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const PosReg = (props) => {

  const { authData } = props;

   return (
     <div className="pos-reg block-adapt d-f pl-35 pr-35">
       <div className="pos-reg__image block-adapt__image d-f">
         <img src={HomeBussiness} alt="HomeBussiness"/>
       </div>
       <div className="pos-reg__container block-adapt__container d-f fd-c mt-3 ml-15">
         <h2 className="reg-council block-adapt__headline headlines-pos h2-black fs-40 lh-44 ls-5 fw-700 t-align-l als-fs">
           Are you Council or a business?
         <br />
           Register your interest now!
         </h2>
         <p className="reg-text block-adapt__text headlines-pos h2-black fs-25 lh-41 ls-4 fw-500 mt-5 t-align-l">
           Tribus brings people, businesses and councils together to improve local communities. We’re here to help your ideas become a reality.
         </p>

         { authData.isAuth
            ? <div className="reg-btn block-adapt__btn mt-10">
               <button className="btn btn green sh-btn-sm xl fs-18 lh-18 ls-27 fw-500 d-f jc-c">
                 Create project
               </button>
             </div>
            : <NavLink to='/registration' className="reg-btn block-adapt__btn mt-10">
               <button className="btn btn green sh-btn-sm xl fs-18 lh-18 ls-27 fw-500 d-f jc-c">
                 Register now!
               </button>
              </NavLink>
         }

        </div>
     </div>
   );
};

let mapStateToProps = ({authData}) => ({authData});

export default connect(mapStateToProps)(PosReg);