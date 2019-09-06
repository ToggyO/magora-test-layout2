import React from 'react';
import Cropper from 'react-cropper';
import '../../../node_modules/cropperjs/dist/cropper.css';


const cropper = React.createRef();

/* eslint-disable class-methods-use-this */
class AvatarCropper extends React.Component {
  crop() {
    console.log('cropped');
    // image in dataUrl
    // console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
  }

  render() {
    const { loadedFile } = this.props;

    return (
      <>
      <Cropper
        ref={cropper}
        src={loadedFile}
        style={{ height: 400, width: '100%' }}
        aspectRatio={1}
        guides={false}
        preview="img-preview"
        crop={this.crop.bind(this)}
      />
      {/* <div className="img-preview"> */}
      {/* </div> */}
      </>
    );
  }
}

export default AvatarCropper;
