import React, {useEffect} from 'react';
import Preloader from "../../../Components/Preloader/Preloader";
import {
  parseQueryString,
  parseRouteString,
  renderingProjects
} from "../../../Libs/additionalSortingFunctions";
import {KEYWORD} from "../../../Constants";
import ProfilePagination from "../../../Components/Pagination/ProfilePagination";


const ProfileCardsContainer = (props) => {

  const {
    userProfileData,
    getUserDataProfile,
    location
  } = props;


  useEffect(() => {
    getUserDataProfile(
      parseRouteString(location.pathname),
      KEYWORD.IDEAS, userProfileData.ideas,
      parseQueryString(location.search)
    );
    window.scrollTo(0, 0);
  },[location.search]);


  return  <>
            {userProfileData.loading
                ? <Preloader style={{
                    paddingTop: 30,
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'static'
                  }}
                  />
                : <>
                    <div className="user-profile__tabs-content wrapper-container pl-31 pr-31 pt-13 pb-13 d-f fw-w jc-c">
                          {renderingProjects(userProfileData[KEYWORD.IDEAS].items, KEYWORD.IDEAS)}
                    </div>
                    <div className='pt-5 pb-5 pl-5 pr-5 d-f jc-c' style={{width: '100%'}}>
                      <ProfilePagination
                        data={userProfileData[KEYWORD.IDEAS]}
                        location={location}
                      />
                    </div>
                  </>
              }
           </>
};


export default ProfileCardsContainer;