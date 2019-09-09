import React, { useEffect } from 'react';
import Dropzone from 'react-dropzone';
import s from './style.module.sass';


const MyDropZone = (props) => {
  const {
    input,
    loadedImage,
    styleInput,
    styleDiv,
    setLoadedFile,
    loadedFile,
    openModal,
  } = props;

  useEffect(() => {
    if (loadedImage) {
      debugger;
      setLoadedFile(loadedImage);
    }
  }, [loadedImage]);

  const handleOnDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const currentAcceptedFile = acceptedFiles[0];
      const fr = new FileReader();
      fr.readAsDataURL(currentAcceptedFile);
      fr.onload = () => {
        setLoadedFile(fr.result);
        // setLoadedFile(window.URL.createObjectURL(fr.result));
        debugger;
        openModal('cropper-preview', props);
      };
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
            {/* <div */}
            {/*  style={{ backgroundImage: `url(${loadedFile})` }} */}
            {/*  className={s.loadedImage} */}
            {/* > */}
            {/* </div> */}
          <div className={`${s.loadedImage} img-preview`} />

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
