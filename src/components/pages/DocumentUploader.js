import React, { Component } from 'react';
import ImagePreview from '../layout/ImagePreview';

export default class DocumentUploader extends Component {
  state = {
    displayCamera: false
  };

  render() {
    const { displayCamera } = this.state;
    return (
      <div className="row justify-content-center">
        {displayCamera ? null : (
          // camera will be added
          <div>
            <ImagePreview imageSrcHandler="/images/No_Image_Available.jpg" />
            <button className="camera-btn mr-3 mb-3 ml-4">
              <i class="fas fa-camera text-white" />
            </button>
            <button className="send-document-btn text-white  mb-3">
              Senden Dokument
            </button>
          </div>
        )}
      </div>
    );
  }
}
