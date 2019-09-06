import React, { useEffect } from 'react';
import Dropzone from 'react-dropzone';
import s from './style.module.sass';


const MyDropZone = (props) => {
  const {
    input,
    loadImage,
    loadedImage,
    styleInput,
    styleDiv,
    setLoadedFile,
    loadedFile,
    // openModal,
  } = props;

  // const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (loadedImage) {
      setLoadedFile(loadedImage);
    }
  }, [loadedImage]);
  // console.log(avatar);
  // console.log(loadedImage);
  // console.log(resourceId);

  const handleOnDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const currentAcceptedFile = acceptedFiles[0];
      setLoadedFile(window.URL.createObjectURL(currentAcceptedFile));
      // setAvatar(window.URL.createObjectURL(currentAcceptedFile));
      const fr = new FileReader();
      fr.readAsArrayBuffer(currentAcceptedFile);
      fr.onload = async () => {
        // await openModal('cropper-preview');
        loadImage(fr.result);
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
            <div
              style={{ backgroundImage: `url(${loadedFile})` }}
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
              <div className={s.dropzone_edit} style={styleDiv} {...getRootProps()}>
                <input
                  // value={input.onChange(avatar !== null ? resourceId : null)}
                  name={input.name}
                  // onChange={handleOnDrop}
                  onBlur={input.onBlur}
                  style={styleInput}
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
