import React from 'react';
import Preloader from "../../../Components/Preloader/Preloader";
import {
  renderingProjects
} from "../../../Libs/additionalSortingFunctions";
import ProfilePagination from "../../../Components/Pagination/ProfilePagination";


const ProfileCardsContainer = (props) => {

  const {
    userProfileData,
    location,
    projectType,
  } = props;


  return  <>
            {userProfileData.loading &&
              <Preloader style={{
                  // paddingTop: 30,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'fixed',
                }}
              />
            }
           <>
              <div className="user-profile__tabs-content wrapper-container pl-31 pr-31 pt-13 pb-13 d-f fw-w jc-c">
                    {renderingProjects(userProfileData[projectType].items, projectType)}
              </div>
              <div className='pt-5 pb-5 pl-5 pr-5 d-f jc-c' style={{width: '100%'}}>
                <ProfilePagination
                  data={userProfileData[projectType]}
                  location={location}
                />
              </div>
            </>
         </>
};


export default ProfileCardsContainer;