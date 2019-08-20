import React, {useEffect, useState} from 'react';
import './style.sass';
import ProfileHeader from './ProfileHeader';
import ProfileNavigation from './ProfileNavigation';
import {getUserProfile, stateProfileCleaning} from "../../Store/Actions/users/users";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ProfileHeaderEmpty from './ProfileHeader/Empty';
import ProfileNavigationEmpty from './ProfileNavigation/Empty';
import {parseRouteString} from "../../Libs/additionalSortingFunctions";
import ErrorWrapper from "../../Components/ErrorWrapper";
import Preloader from "../../Components/Preloader/Preloader";


const UserProfile = (props) => {

  const {
    userProfileData,
    getUserProfile,
    location,
    stateProfileCleaning
  } = props;

  const [initialize, setInitialize] = useState(false);


  useEffect(() => {
    // history.push(`${ROUTES.PROJECT_SEARCH}/${publisher.id}`);
    getUserProfile(parseRouteString(location.pathname));
    window.scrollTo(0, 0);

    return () => {
      stateProfileCleaning();
    };
  }, []);


  useEffect(() => {
    userProfileData.isUserData && setInitialize(true)
  }, [userProfileData.isUserData]);


  if(!initialize) {
    return <ErrorWrapper error={userProfileData.error}>
            {userProfileData.loading && <Preloader style={{
                  position: 'fixed',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              />
            }
            <ProfileHeaderEmpty/>
            <ProfileNavigationEmpty />
            <div className='user-profile__tabs'>lfd
              DATA
            </div>
           </ErrorWrapper>
  }

  return <ErrorWrapper error={userProfileData.error}>
          {userProfileData.loading && <Preloader style={{
                position: 'fixed',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            />
          }
          <ProfileHeader
            userInfo={userProfileData.userInfo}
          />
          <ProfileNavigation location={location}/>
          <div className='user-profile__tabs'>lfd
              DATA
          </div>
         </ErrorWrapper>
};


let mapStateToProps = ({ userProfileData, }) => ({ userProfileData, });
let mapDispatchToProps = (dispatch) => {
  return {
    getUserProfile: bindActionCreators(getUserProfile, dispatch),
    stateProfileCleaning: bindActionCreators(stateProfileCleaning, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);