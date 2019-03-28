import React from 'react';

const ImagePreview = props => {
  return (
    <div>
      <img width='100%' height="auto" src={props.imageSrcHandler} alt="no-image-available" />
    </div>
  );
};

export default ImagePreview;
