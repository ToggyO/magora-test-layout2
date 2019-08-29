import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.sass';
import EditProfileHeader from './EditProfileHeader';
import EditProfileForm from '../../Components/Form/ReduxForm/EditProfileForm';
import { getUserDataProfileForEdit } from '../../Store/Actions/users/actionUsers';
import { KEYWORD } from '../../Constants';
import { isEmpty } from '../../Libs/additionalSortingFunctions';
import Preloader from '../../Components/Preloader/Preloader';


class MyProfileEdit extends React.Component {
  componentDidMount() {
    // if (this.props.)
    this.props.getUser(KEYWORD.EDIT_INFO);
    window.scrollTo(0, 0);
  }

  render() {
    const { userProfileData = {} } = this.props;
    const { editInfo = {} } = userProfileData;
    const { user = {} } = editInfo;

    return (
      <>
        <div className="edit-profile wrapper">
          <div className="edit-profile__loader">
            {isEmpty(editInfo)
            && <Preloader style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            />
            }
            <EditProfileHeader user={user}/>
            <div className="edit-profile__container wrapper-container">
              <EditProfileForm initialValues={{
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phoneNumber: user.phone,
              }}/>
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
