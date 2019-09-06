import React, { useState } from 'react';
import MyDropZone from '../ReactDropzone';
import AvatarCropper from '../ReactCropper';


const ImageCropper = (props) => {
  const {
    input,
    loadImage,
    loadedImage,
    resourceId,
    styleInput,
    styleDiv,
    openModal,
  } = props;

  const [loadedFile, setLoadedFile] = useState(null);

  return <>
          <MyDropZone
            input={input}
            loadImage={loadImage}
            loadedImage={loadedImage}
            resourceId={resourceId}
            styleInput={styleInput}
            styleDiv={styleDiv}
            setLoadedFile={setLoadedFile}
            openModal={openModal}
            loadedFile={loadedFile}
          />
          <AvatarCropper loadedFile={loadedFile}/>
        </>;
};

export default ImageCropper;
