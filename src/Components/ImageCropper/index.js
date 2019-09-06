import React from 'react';
import MyDropZone from '../ReactDropzone';


const ImageCropper = (props) => {
  const {
    input,
    loadImage,
    loadedImage,
    resourceId,
    styleInput,
    styleDiv,
  } = props;

  return <>
          <MyDropZone
            input={input}
            loadImage={loadImage}
            loadedImage={loadedImage}
            resourceId={resourceId}
            styleInput={styleInput}
            styleDiv={styleDiv}
          />
        </>;
};

export default ImageCropper;
