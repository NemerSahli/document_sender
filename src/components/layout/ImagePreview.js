import React from 'react';

const ImagePreview = props => {
  return (
    <div className="h-100">
      {props.imgDataUri ? (
        <img
          width="100%"
          height="auto"
          src={props.imgDataUri}
          alt="no-image-available"
        />
      ) : (
        <div className="text-center">
          <img src="/images/icons/mieter-engel-logo.png" alt="Mieter-logo" />
          <h5 className="text-white mt-3">Der Mietershutz-Club</h5>
          <p className="text-white">Bitte fotografieren Ihr Dokument</p>
        </div>
      )}
    </div>
  );
};

export default ImagePreview;
