import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import './style.sass';
import EditProfileHeader from './EditProfileHeader';
import EditProfileForm from '../../Components/Form/ReduxForm/EditProfileForm';
import { getUserDataProfileForEdit } from '../../Store/Actions/users/actionUsers';
import { KEYWORD } from '../../Constants';
import { isEmpty } from '../../Libs/HelperFunctions';
import Preloader from '../../Components/Preloader/Preloader';


class MyProfileEdit extends React.Component {
  static propTypes = {
    userProfileData: PropTypes.object,
    editInfo: PropTypes.object,
    user: PropTypes.object,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    areaName: PropTypes.string,
    stateName: PropTypes.string,
    about: PropTypes.string,
    website: PropTypes.string,
    facebookLink: PropTypes.string,
    googlePlusLink: PropTypes.string,
    instagramLink: PropTypes.string,
    linkedInLink: PropTypes.string,
    pinterestLink: PropTypes.string,
    twitterLink: PropTypes.string,
    youTubeLink: PropTypes.string,
  };

  componentDidMount() {
    this.props.getUser(KEYWORD.EDIT_INFO);
    window.scrollTo(0, 0);
  }

  render() {
    const { userProfileData = {} } = this.props;
    const { editInfo = {} } = userProfileData;
    const { user = {}, location = {}, resource = {} } = editInfo;
    const {
      firstName,
      lastName,
      email,
      phone,
      about,
      website,
      facebookLink,
      googlePlusLink,
      instagramLink,
      linkedInLink,
      pinterestLink,
      twitterLink,
      youTubeLink,
    } = user;
    const {
      areaName,
      stateName,
      stateAbbreviation,
    } = location;
    const { formatUrls = {} } = resource;

    return (
      <>
        <div className="edit-profile wrapper">
          <div className="edit-profile__loader">
            {(isEmpty(editInfo) || userProfileData.loading)
            && <Preloader style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '300px',
            }}
            />
            }
            <EditProfileHeader user={user}/>
            <div className="edit-profile__container wrapper-container">
              <EditProfileForm initialValues={{
                firstName: firstName || null,
                lastName: lastName || null,
                email: email || null,
                phone: phone || null,
                address: `${areaName}, ${stateAbbreviation}, ${stateName}` || null,
                about: about || null,
                website: website || null,
                facebookLink: facebookLink || null,
                googlePlusLink: googlePlusLink || null,
                instagramLink: instagramLink || null,
                linkedInLink: linkedInLink || null,
                pinterestLink: pinterestLink || null,
                twitterLink: twitterLink || null,
                youTubeLink: youTubeLink || null,
              }}
               loadedImage={formatUrls.small || null}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ userProfileData, authData }) => ({
  userProfileData,
  authData,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: bindActionCreators(getUserDataProfileForEdit, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileEdit);
