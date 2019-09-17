import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './style.sass';
import ProfileHeader from './ProfileHeader';
import ProfileNavigation from './ProfileNavigation';
import {
  getUserDataProfile,
  stateProfileCleaning,
} from '../../Store/Actions/users/actionUsers';

import ProfileHeaderEmpty from './ProfileHeader/Empty';
import ProfileNavigationEmpty from './ProfileNavigation/Empty';
import {
  isEmpty,
  parseQueryString,
  parseRouteString,
} from '../../Libs/HelperFunctions';
import Preloader from '../../Components/Preloader/Preloader';
import { KEYWORD, ROUTES, REQUEST_ULR } from '../../Constants';
import ProfileCardsContainer from './ProfileCardsContainer';
import AboutProfile from './AboutProfile';


const UserProfile = (props) => {
  const {
    userProfileData,
    getUser,
    location,
    profileCleaning,
    match,
    authData,
  } = props;


  useEffect(() => {
    const { userId } = match.params;
    getUser(userId, REQUEST_ULR.PROFILES, null, null, null);
    getUser(userId,
      REQUEST_ULR.USERS,
      KEYWORD.IDEAS, parseRouteString(location.pathname),
      parseQueryString(location.search));
    getUser(userId,
      REQUEST_ULR.USERS, KEYWORD.ENGAGEMENT,
      parseRouteString(location.pathname),
      parseQueryString(location.search));
    getUser(userId,
      REQUEST_ULR.USERS, KEYWORD.EVENTS,
      parseRouteString(location.pathname),
      parseQueryString(location.search));
    window.scrollTo(0, 0);


    return () => {
      profileCleaning();
    };
  }, [match.params.userId]);


  const [currentTab, changeCurrentTab] = useState(match.params.tab);
  useEffect(() => {
    changeCurrentTab(match.params.tab);
  }, [match.params.tab]);

  useEffect(() => {
    if (currentTab !== match.params.tab) return;
    getUser(
      match.params.userId,
      REQUEST_ULR.USERS,
      match.params.tab,
      parseRouteString(location.pathname),
      parseQueryString(location.search),
    );

    window.scrollTo({
      left: 0,
      top: 0,
      // behavior: 'smooth'
    });
  }, [location.search]);


  const [tabQuery, pushTabQuery] = useState({
    about: '',
    ideas: '',
    engagements: '',
    events: '',
  });

  // useEffect(() => console.log('tab state updated', tabQuery), [tabQuery]);


  if (isEmpty(userProfileData.userInfo)
    || isEmpty(userProfileData.ideas)
    || isEmpty(userProfileData.engagements)
    || isEmpty(userProfileData.events)) {
    return <>
      <Preloader style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      />
      <ProfileHeaderEmpty/>
      <ProfileNavigationEmpty
        userProfileData={userProfileData}
        location={location}
      />
      <div className='user-profile__tabs wrapper'>
        <div className='user-profile__tabs-content wrapper-container pl-31 pr-31 pt-13 pb-13 d-f fw-w jc-c'>
        </div>
      </div>
    </>;
  }


  return <>
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
                  getUserDataProfile={getUser}
                  location={location}
                  projectType={KEYWORD.IDEAS}
                  userId={match.params.userId}
                />}
              />
              <Route

                path={`/${ROUTES.USER_PROFILE}/${match.params.userId}/${KEYWORD.ENGAGEMENT}`}
                render={() => <ProfileCardsContainer
                  userProfileData={userProfileData}
                  getUserDataProfile={getUser}
                  location={location}
                  projectType={KEYWORD.ENGAGEMENT}
                  userId={match.params.userId}
                />}
              />
              <Route

                path={`/${ROUTES.USER_PROFILE}/${match.params.userId}/${KEYWORD.EVENTS}`}
                render={() => <ProfileCardsContainer
                  userProfileData={userProfileData}
                  getUserDataProfile={getUser}
                  location={location}
                  projectType={KEYWORD.EVENTS}
                  userId={match.params.userId}
                />}
              />
            </Switch>
          </div>
  </>;
};


const mapStateToProps = ({ userProfileData, authData }) => ({ userProfileData, authData });
const mapDispatchToProps = (dispatch) => ({
  getUser: bindActionCreators(getUserDataProfile, dispatch),
  profileCleaning: bindActionCreators(stateProfileCleaning, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
