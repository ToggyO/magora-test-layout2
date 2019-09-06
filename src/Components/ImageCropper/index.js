import React from 'react';
import MyDropZone from '../ReactDropzone';


const ImageCropper = (props) => {
  const {
    input,
    loadImage,
    loadedImage,
  } = props;

  return <>
          <MyDropZone
            inputRedux={input}
            loadImage={loadImage}
            loadedImage={loadedImage}
          />
        </>;
};

export default ImageCropper;
