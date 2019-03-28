import React from 'react';

const ImagePreview = props => {
  return (
    <div className="h-100">
      <img
        
        src={props.imageSrcHandler}
        alt="no-image-available"
      />
    </div>
  );
};

export default ImagePreview;
