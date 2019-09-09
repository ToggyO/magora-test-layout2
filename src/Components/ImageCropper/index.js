import React, { useState } from 'react';
import MyDropZone from '../ReactDropzone';
// import AvatarCropper from '../ReactCropper';


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
  const [croppedImage, setCroppedImage] = useState(null);

  return <>
          <MyDropZone
            input={input}
            loadedImage={loadedImage}
            resourceId={resourceId}
            styleInput={styleInput}
            styleDiv={styleDiv}
            setLoadedFile={setLoadedFile}
            openModal={openModal}
            loadedFile={loadedFile}
            loadImage={loadImage}
            croppedImage={croppedImage}
            setCroppedImage={setCroppedImage}
          />
          {/* <AvatarCropper */}
          {/*  loadedFile={loadedFile} */}
          {/*  loadImage={loadImage} */}
          {/*  croppedImage={croppedImage} */}
          {/*  setCroppedImage={setCroppedImage} */}
          {/* /> */}
        </>;
};

export default ImageCropper;
