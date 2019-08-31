import React from 'react';
import './style.sass';
import Info from './Info';


const AboutProfile = (props) => {
  const {
    firstName,
    about,
    email,
    phone,
    organizationName,
    website,
    facebookLink,
    googlePlusLink,
    instagramLink,
    linkedInLink,
    pinterestLink,
    twitterLink,
    youTubeLink,
  } = props.userInfo;


  return <div className="about-profile wrapper">
    <div className="about-profile__container wrapper-container pt-15 pb-15">

      <div className="about-profile__info-block">
        <div className="about-profile__title">
          <h6 className="h2-black fs-24 lh-43 ls-4 fw-600">About {firstName} </h6>
        </div>
        <div className="about-profile__about mt-2">
          <p className="h2-black fs-16 lh-24 ls-2 fw-500">{about}</p>
        </div>

        <div className="about-profile__not-required-params">
          {email && <Info title="E-mail" value={email} />}
          {phone && <Info title="Phone number" value={phone} />}
          {organizationName && <Info title="Organization name" value={organizationName} />}
          {website && <Info title="Website" value={website} />}
          {facebookLink && <Info title="Facebook" value={facebookLink} />}
          {googlePlusLink && <Info title="Google Plus" value={googlePlusLink} />}
          {instagramLink && <Info title="Instagram" value={instagramLink} />}
          {linkedInLink && <Info title="LinkedIn" value={linkedInLink} />}
          {pinterestLink && <Info title="Pinterest" value={pinterestLink} />}
          {twitterLink && <Info title="Twitter" value={twitterLink} />}
          {youTubeLink && <Info title="YouTube" value={youTubeLink} />}
        </div>
      </div>
    </div>
  </div>;
};


export default AboutProfile;
