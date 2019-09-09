import React, { useEffect } from 'react';
import Dropzone from 'react-dropzone';
import s from './style.module.sass';


const MyDropZone = (props) => {
  const {
    input,
    resourceFromStore,
    styleInput,
    styleDiv,
    setLoadedFile,
    loadedFile,
    openModal,
    closeModal,
  } = props;

  useEffect(() => {
    if (resourceFromStore) {
      setLoadedFile(resourceFromStore);
    }
  }, [resourceFromStore]);

  const handleOnDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const currentAcceptedFile = window.URL.createObjectURL(acceptedFiles[0]);
      setLoadedFile(currentAcceptedFile);
      openModal('cropper-preview', { currentAcceptedFile, closeModal, ...props });
    }
  };

  const clearInput = () => {
    input.onChange(null);
    setLoadedFile(null);
  };

  return (
    <>
      {loadedFile !== null
        ? <div className={s.inputBlock_label__loadedImage}>
           {<div className={`${s.loadedImage} img-preview`} />
             || <div
              style={{ backgroundImage: `url(${loadedFile})` }}
              className={s.loadedImage}
             >
           </div>}
          <div
              className={s.cross}
              onClick={clearInput}
            >
              <span>⮾</span>
            </div>
          </div>
        : <Dropzone
          onDrop={handleOnDrop}
          multiple={false}
        >
          {({ getRootProps, getInputProps }) => (
            <section>
              <div className={s.dropzone_edit} style={styleDiv} {...getRootProps()}>
                <input
                  name={input.name}
                  onBlur={input.onBlur}
                  style={styleInput}
                  {...getInputProps()}/>
                <p>Drag 'n' drop some images here, or click to select image</p>
              </div>
            </section>
          )}
        </Dropzone>
      }
    </>
  );
};

export default MyDropZone;
