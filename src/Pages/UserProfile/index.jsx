import React, {useEffect, useState} from 'react';
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
  parseQueryString,
  parseRouteString,
} from "../../Libs/additionalSortingFunctions";
import ErrorWrapper from "../../Components/ErrorWrapper";
import Preloader from "../../Components/Preloader/Preloader";
import {KEYWORD, ROUTES} from '../../Constants';
import ProfileCardsContainer from "./ProfileCardsContainer";
import {Route, Switch} from "react-router-dom";
import AboutProfile from "./AboutProfile";



const UserProfile = (props) => {

  const {
    userProfileData,
    getUserDataProfile,
    location,
    stateProfileCleaning,
  } = props;

  const [initialize, setInitialize] = useState(false);


  useEffect(() => {
    let queries = parseRouteString(location.pathname);
    getUserDataProfile(queries, null, null, null);
    getUserDataProfile(queries, KEYWORD.IDEAS, userProfileData.ideas, parseQueryString(location.search));
    getUserDataProfile(queries, KEYWORD.ENGAGEMENT, userProfileData.engagements, parseQueryString(location.search));
    getUserDataProfile(queries, KEYWORD.EVENTS, userProfileData.events, parseQueryString(location.search));
    window.scrollTo(0, 0);

    return () => {
      stateProfileCleaning();
    };
  }, []);


  useEffect(() => {
    (userProfileData.userInfoDataIs &&
      userProfileData.ideasDataIs &&
      userProfileData.engagementsDataIs &&
      userProfileData.eventsDataIs) && setInitialize(true);
  }, [
    userProfileData.userInfoDataIs,
    userProfileData.ideasDataIs,
    userProfileData.engagementsDataIs,
    userProfileData.eventsDataIs
  ]);


  if(!initialize) {
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
          />
          <ProfileNavigation
            userProfileData={userProfileData}
            location={location}
          />
          <div className='user-profile__tabs wrapper'>
            <Switch>
              <Route
                path={`/${ROUTES.USER_PROFILE}/${parseRouteString(location.pathname)}?${`tab=about`}`}
                component={AboutProfile}
              />
              <Route
                exact path={`/${ROUTES.USER_PROFILE}/${parseRouteString(location.pathname)}?tab=${KEYWORD.IDEAS}`}
                render={() => <ProfileCardsContainer
                  userProfileData={userProfileData}
                  getUserDataProfile={getUserDataProfile}
                  location={location}
                  projectType={KEYWORD.IDEAS}
                />}
              />
              <Route
                exact path={`/${ROUTES.USER_PROFILE}/${parseRouteString(location.pathname)}?tab=${KEYWORD.ENGAGEMENT}`}
                render={() => <ProfileCardsContainer
                  userProfileData={userProfileData}
                  getUserDataProfile={getUserDataProfile}
                  location={location}
                  projectType={KEYWORD.ENGAGEMENT}
                />}
              />
              <Route
                exact path={`/${ROUTES.USER_PROFILE}/${parseRouteString(location.pathname)}?tab=${KEYWORD.EVENTS}`}
                render={() => <ProfileCardsContainer
                  userProfileData={userProfileData}
                  getUserDataProfile={getUserDataProfile}
                  location={location}
                  projectType={KEYWORD.EVENTS}
                />}
              />
            </Switch>
          </div>

         </ErrorWrapper>
};


let mapStateToProps = ({ userProfileData, }) => ({ userProfileData, });
let mapDispatchToProps = (dispatch) => {
  return {
    getUserDataProfile: bindActionCreators(getUserDataProfile, dispatch),
    stateProfileCleaning: bindActionCreators(stateProfileCleaning, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);