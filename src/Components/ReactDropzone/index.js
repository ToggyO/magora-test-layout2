import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import s from './style.module.sass';


const MyDropZone = (props) => {
  const {
    inputRedux,
    loadImage,
    loadedImage,
  } = props;

  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (loadedImage) {
      setAvatar(loadedImage);
    }
  }, [loadedImage]);

  const handleOnDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const currentAcceptedFile = acceptedFiles[0];
      setAvatar(window.URL.createObjectURL(currentAcceptedFile));
      const fr = new FileReader();
      fr.readAsArrayBuffer(currentAcceptedFile);
      fr.onload = () => {
        loadImage(fr.result);
      };
      // console.log(inputRef.current.value);
    }
  };

  const clearInput = () => {
    inputRedux.onChange('');
    // inputRef.current.value = '';
    setAvatar(null);
  };

  return (
    <>
      {avatar !== null
        ? <div className={s.inputBlock_label__loadedImage}>
            <div
              style={{ backgroundImage: `url(${avatar})` }}
              className={s.loadedImage}
            >
            </div>
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
              <div className={s.dropzone_edit} {...getRootProps()}>
                <input
                  value={inputRedux.onChange(() => (avatar !== null ? resourceId : null))}
                  name={inputRedux.name}
                  // onChange={fileChange}
                  onBlur={inputRedux.onBlur}
                  // style={styleInput}
                  {...getInputProps()}/>
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>
      }
    </>
  );
};

export default MyDropZone;
