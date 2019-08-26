import React, {useEffect, useState, useRef} from 'react';
import './style.sass';
import ProfileHeader from './ProfileHeader';
import ProfileNavigation from './ProfileNavigation';
import {
  getUserDataProfile,
  stateProfileCleaning
} from "../../Store/Actions/users/actionUsers";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ProfileHeaderEmpty from './ProfileHeader/Empty';
import ProfileNavigationEmpty from './ProfileNavigation/Empty';
import {
  isEmpty,
  parseQueryString,
  parseRouteString,
} from "../../Libs/additionalSortingFunctions";
import ErrorWrapper from "../../Components/ErrorWrapper";
import Preloader from "../../Components/Preloader/Preloader";
import {KEYWORD, ROUTES} from '../../Constants';
import ProfileCardsContainer from "./ProfileCardsContainer";
import {Route, Switch} from "react-router-dom";
import AboutProfile from "./AboutProfile";
import {REQUEST_ULR} from '../../Constants';


const UserProfile = (props) => {

  const {
    userProfileData,
    getUserDataProfile,
    location,
    stateProfileCleaning,
    match,
    authData
  } = props;


  useEffect(() => {
    let userId = match.params.userId;
    getUserDataProfile(userId, REQUEST_ULR.PROFILES,  null, null, null);
    getUserDataProfile(userId, REQUEST_ULR.USERS, KEYWORD.IDEAS, parseRouteString(location.pathname), parseQueryString(location.search),);
    getUserDataProfile(userId, REQUEST_ULR.USERS, KEYWORD.ENGAGEMENT, parseRouteString(location.pathname), parseQueryString(location.search));
    getUserDataProfile(userId, REQUEST_ULR.USERS, KEYWORD.EVENTS, parseRouteString(location.pathname), parseQueryString(location.search));
    window.scrollTo(0, 0);


    return () => {
      stateProfileCleaning();
    };
  }, [match.params.userId]);


  const [currentTab, changeCurrentTab] = useState(match.params.tab);
  useEffect(() => {
    changeCurrentTab(match.params.tab);
  },[match.params.tab]);

  useEffect(() => {
   if (currentTab !== match.params.tab) return;
   getUserDataProfile(
      match.params.userId,
      REQUEST_ULR.USERS,
      match.params.tab,
      parseRouteString(location.pathname),
      parseQueryString(location.search)
    );

    window.scrollTo({
      left: 0,
      top: 0,
      // behavior: 'smooth'
    });
  },[location.search]);


  const [tabQuery, pushTabQuery] = useState({
    about: '',
    ideas: '',
    engagements: '',
    events: ''
  });


  if (isEmpty(userProfileData.userInfo) || isEmpty(userProfileData.ideas) || isEmpty(userProfileData.engagements) || isEmpty(userProfileData.events)) {
    return <ErrorWrapper error={userProfileData.error}>
      <Preloader style={{
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      />
      <ProfileHeaderEmpty/>
      <ProfileNavigationEmpty
        userProfileData={userProfileData}
        location={location}
      />
      <div className='user-profile__tabs wrapper'>
        <div className="user-profile__tabs-content wrapper-container pl-31 pr-31 pt-13 pb-13 d-f fw-w jc-c">
        </div>
      </div>
    </ErrorWrapper>
  }


  return <ErrorWrapper error={userProfileData.error}>
          <ProfileHeader
            userInfo={userProfileData.userInfo}
            authData={authData}
          />
          <ProfileNavigation
            userProfileData={userProfileData}
            location={location}
            userId={match.params.userId}
            tabQuery={tabQuery}
            pushTabQuery={pushTabQuery}
          />
          <div className='user-profile__tabs wrapper'>
            <Switch>
              <Route
                exact
                path={`/${ROUTES.USER_PROFILE}/${match.params.userId}/${KEYWORD.ABOUT}`}
                render={() => <AboutProfile userInfo={userProfileData.userInfo.user}/>}
              />
              <Route

                path={`/${ROUTES.USER_PROFILE}/${match.params.userId}/${KEYWORD.IDEAS}`}
                render={() => <ProfileCardsContainer
                  userProfileData={userProfileData}
                  getUserDataProfile={getUserDataProfile}
                  location={location}
                  projectType={KEYWORD.IDEAS}
                  userId={match.params.userId}
                />}
              />
              <Route

                path={`/${ROUTES.USER_PROFILE}/${match.params.userId}/${KEYWORD.ENGAGEMENT}`}
                render={() => <ProfileCardsContainer
                  userProfileData={userProfileData}
                  getUserDataProfile={getUserDataProfile}
                  location={location}
                  projectType={KEYWORD.ENGAGEMENT}
                  userId={match.params.userId}
                />}
              />
              <Route

                path={`/${ROUTES.USER_PROFILE}/${match.params.userId}/${KEYWORD.EVENTS}`}
                render={() => <ProfileCardsContainer
                  userProfileData={userProfileData}
                  getUserDataProfile={getUserDataProfile}
                  location={location}
                  projectType={KEYWORD.EVENTS}
                  userId={match.params.userId}
                />}
              />
            </Switch>
          </div>

         </ErrorWrapper>
};


let mapStateToProps = ({ userProfileData, authData }) => ({ userProfileData, authData });
let mapDispatchToProps = (dispatch) => {
  return {
    getUserDataProfile: bindActionCreators(getUserDataProfile, dispatch),
    stateProfileCleaning: bindActionCreators(stateProfileCleaning, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);














// const [currentTab, changeCurrentTab] = useState(match.params.tab);
// useEffect(() => {
//   changeCurrentTab(match.params.tab);
// },[match.params.tab]);
//
// useEffect(() => {
//   if (currentTab !== match.params.tab) return;
//   getUserDataProfile(
//     match.params.userId,
//     match.params.tab,
//     parseQueryString(location.search)
//   );
//   window.scrollTo({
//     left: 0,
//     top: 0,
//     behavior: 'smooth'
//   });
// },[location.search]);