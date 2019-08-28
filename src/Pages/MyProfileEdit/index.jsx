import React from 'react';
import './style.sass';
import EditProfileHeader from './EditProfileHeader';
import EditProfileForm from '../../Components/Form/ReduxForm/EditProfileForm';

/* eslint-disable class-methods-use-this */
class MyProfileEdit extends React.Component {
  render() {
    return (
      <div className="edit-profile wrapper">
        <EditProfileHeader />
        <div className="edit-profile__container wrapper-container">
          <EditProfileForm />
        </div>
      </div>
    );
  }
}


export default MyProfileEdit;
