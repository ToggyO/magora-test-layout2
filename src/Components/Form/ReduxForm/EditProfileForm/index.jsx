import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createResourceId, putUserData } from '../../../../Store/Actions/users/actionUsers';
import './style.sass';
import LabelWrapper from '../../../LabelWrapper';
import ReduxFormTextInput from '../ReduxFormTextInput';
import validationEditForm from './validationEditForm';
import ReduxFormTextarea from '../ReduxFormTextarea';
import ImageCropper from '../../../ImageCropper';
import { modalClose, modalOpen } from '../../../../Store/Actions/modal/actionModal';


/* eslint-disable */
let EditProfileForm = props => {
  const {
    handleSubmit,
    valid,
    error,
    putUser,
    resourceIdCreate,
    loadedImage,
    openModal,
    closeModal,
  } = props;

  return <form className="form-edit" onSubmit={handleSubmit(putUser)}>
    <div className="form-edit__header">
      <h4 className="fs-24 fw-600 mb-4">Your Tribus Account details</h4>
      <p className="fs-18 lh-25">Make sure your information is up to date.
        You can change your password on this page as well as update your relevant information.
      </p>
    </div>

    <div className="form-edit__profile">
      <LabelWrapper label="Profile">
        <Field
          name="firstName"
          type="text"
          label="First Name"
          isRequired={true}
          component={ReduxFormTextInput}
          styleInput={{ fontWeight: 600 }}
        />

        <Field
          name="lastName"
          type="text"
          label="Last Name"
          isRequired={true}
          component={ReduxFormTextInput}
          styleInput={{ fontWeight: 600 }}
        />

        <Field
          name="email"
          type="email"
          label="Contact Email"
          isRequired={true}
          component={ReduxFormTextInput}
          styleInput={{ fontWeight: 600 }}
        />

        <Field
          name="phone"
          type="tel"
          label="Phone number"
          component={ReduxFormTextInput}
          styleInput={{ fontWeight: 600 }}
        />
      </LabelWrapper>
      <LabelWrapper
        label="Address"
        description="Please enter your address so that we can match you with your local community."
      >
        <Field
          name="address"
          type="text"
          label="Address"
          isRequired={true}
          component={ReduxFormTextInput}
          styleInput={{ fontWeight: 600 }}
        />
      </LabelWrapper>

      <LabelWrapper
        label="Add your Profile image"
        description="Stand out from the crowd and be recognised."
      >
        <Field
          name="resourceId"
          label="Profile image"
          component={ImageCropper}
          styleInput={{ fontWeight: 600 }}
          loadImage={resourceIdCreate}
          loadedImage={loadedImage}
          styleDiv={{ cursor: 'pointer'}}
          openModal={openModal}
          closeModal={closeModal}
        />
      </LabelWrapper>

      <LabelWrapper
        label="About"
        description="Please, write about you."
      >
        <Field
          name="about"
          label=""
          maxLength="250"
          component={ReduxFormTextarea}
          styleTextarea={{ fontWeight: 600 }}
        />
        <h4 className="h2-black fw-600 fs-24 mb-4 mt-4">Website</h4>
        <Field
          name="website"
          label="Website"
          component={ReduxFormTextInput}
          styleInput={{fontWeight: 600, width: '100%'}}
          styleWrapper={{display: 'flex'}}
          styleLabel={{
            padding: '20px 20px 20px 0',
            fontSize: '18px',
            fontWeight: 600,
            minWidth: 100,
            maxWidth: 150,
          }}
        />

        <h4 className="h2-black fw-600 fs-24 mb-4 mt-4">Social Links</h4>
        <Field
          name="facebookLink"
          label="Facebook"
          component={ReduxFormTextInput}
          styleInput={{fontWeight: 600, width: '100%'}}
          styleWrapper={{display: 'flex'}}
          styleLabel={{
            padding: '20px 20px 20px 0',
            fontSize: '18px',
            fontWeight: 600,
            minWidth: 100,
            maxWidth: 150,
          }}
        />
        <Field
          name="googlePlusLink"
          label="Google+"
          component={ReduxFormTextInput}
          styleInput={{fontWeight: 600, width: '100%'}}
          styleWrapper={{display: 'flex'}}
          styleLabel={{
            padding: '20px 20px 20px 0',
            fontSize: '18px',
            fontWeight: 600,
            minWidth: 100,
            maxWidth: 150,
          }}
        />
        <Field
          name="instagramLink"
          label="Instagram"
          component={ReduxFormTextInput}
          styleInput={{fontWeight: 600, width: '100%'}}
          styleWrapper={{display: 'flex'}}
          styleLabel={{
            padding: '20px 20px 20px 0',
            fontSize: '18px',
            fontWeight: 600,
            minWidth: 100,
            maxWidth: 150,
          }}
        />
        <Field
          name="linkedInLink"
          label="LinkedIn"
          component={ReduxFormTextInput}
          styleInput={{fontWeight: 600, width: '100%'}}
          styleWrapper={{display: 'flex'}}
          styleLabel={{
            padding: '20px 20px 20px 0',
            fontSize: '18px',
            fontWeight: 600,
            minWidth: 100,
            maxWidth: 150,
          }}
        />
        <Field
          name="pinterestLink"
          label="Pinterest"
          component={ReduxFormTextInput}
          styleInput={{fontWeight: 600, width: '100%'}}
          styleWrapper={{display: 'flex'}}
          styleLabel={{
            padding: '20px 20px 20px 0',
            fontSize: '18px',
            fontWeight: 600,
            minWidth: 100,
            maxWidth: 150,
          }}
        />
        <Field
          name="twitterLink"
          label="Twitter"
          component={ReduxFormTextInput}
          styleInput={{fontWeight: 600, width: '100%'}}
          styleWrapper={{display: 'flex'}}
          styleLabel={{
            padding: '20px 20px 20px 0',
            fontSize: '18px',
            fontWeight: 600,
            minWidth: 100,
            maxWidth: 150,
          }}
        />
        <Field
          name="youTubeLink"
          label="YouTube"
          component={ReduxFormTextInput}
          styleInput={{fontWeight: 600, width: '100%'}}
          styleWrapper={{display: 'flex'}}
          styleLabel={{
            padding: '20px 20px 20px 0',
            fontSize: '18px',
            fontWeight: 600,
            minWidth: 100,
            maxWidth: 150,
          }}
        />


      </LabelWrapper>
    </div>
    { error && <div style={{
      fontSize: '15px',
      lineHeight: '16px',
      letterSpacing: '0.04px',
      fontWeight: 500,
      color: 'red',
      textAlign: 'center',
    }}
    >
      {error}
    </div>}
    <div className="form-edit__submit d-f jc-c">
      <button
        type="submit"
        className="btn green sm-wide fs-16 lh-22 ls-24 fw-700 sh-btn-lg"
        disabled={!valid}
      >
        Save Information
      </button>
    </div>
  </form>;
};


EditProfileForm = reduxForm({
  form: 'editProfileForm',
  enableReinitialize: true,
  validate: validationEditForm,
})(EditProfileForm);

const mapStateToProps = ({ userProfileData }) => ({ userProfileData });

const mapDispatchToProps = (dispatch) => ({
  putUser: bindActionCreators(putUserData, dispatch),
  resourceIdCreate: bindActionCreators(createResourceId, dispatch),
  openModal: bindActionCreators(modalOpen, dispatch),
  closeModal: bindActionCreators(modalClose, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
