import React from 'react';
import Cropper from 'react-cropper';
import '../../../node_modules/cropperjs/dist/cropper.css';
import './style.sass';


/* eslint-disable class-methods-use-this */
class AvatarCropper extends React.Component {
  constructor(props) {
    super(props);
    this.cropper = React.createRef();
  }

  crop() {
    console.log('cropped');
    if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
      return;
    }
    this.cropper
      .getCroppedCanvas()
      .toBlob(blob => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(blob);
        reader.onload = () => {
          debugger;
          this.props.loadImage(reader.result);
        };
      });
  }

  render() {
    const { loadedFile } = this.props;
    debugger;
    return (
      <div className="react-cropper">
        <Cropper
          ref={cropper => { this.cropper = cropper; }}
          src={loadedFile}
          style={{ height: '100%', width: '100%' }}
          aspectRatio={1}
          guides={true}
          responsive={true}
          modal={true}
          center={true}
          autoCrop={true}
          autoCropArea={1}
          zoomable={false}
          preview=".img-preview"
        />
        <div className="react-cropper__button">
          <button
            type="button"
            className="btn green squared"
            onClick={this.crop.bind(this)}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default AvatarCropper;
