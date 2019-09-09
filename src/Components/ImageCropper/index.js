import React, { useState } from 'react';
import MyDropZone from '../ReactDropzone';
// import AvatarCropper from '../ReactCropper';


const ImageCropper = (props) => {
  const {
    input,
    loadImage,
    loadedImage,
    styleInput,
    styleDiv,
    openModal,
    closeModal,
  } = props;

  const [loadedFile, setLoadedFile] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  return <>
          <MyDropZone
            input={input}
            resourceFromStore={loadedImage}
            styleInput={styleInput}
            styleDiv={styleDiv}
            setLoadedFile={setLoadedFile}
            openModal={openModal}
            closeModal={closeModal}
            loadedFile={loadedFile}
            loadImage={loadImage}
            croppedImage={croppedImage}
            setCroppedImage={setCroppedImage}
          />
        </>;
};

export default ImageCropper;
