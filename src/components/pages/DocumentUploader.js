import React, { Component } from 'react';
import CameraEngel from '../pages/CameraEngel';
import ImagePreview from '../layout/ImagePreview';

export default class DocumentUploader extends Component {
  state = {
    imgDataUri: null,
    displayCamera: false,
    emailDelivered: false,
    sendingMailFailedMessage: ''
  };
  onTakePhoto = imgDataUri => {
    this.setState({
      imgDataUri: imgDataUri,
      displayCamera: false
    });
  };

  toggleCamera = () => {
    this.setState({
      displayCamera: true
    });
  };
  sendDocument = () => {
    alert('document will be delivered by mail thanks for your info');
  };
  render() {
    const { imgDataUri, displayCamera } = this.state;
    return (
      <div className="row justify-content-center">
        {displayCamera ? (
          <CameraEngel onTakePhotoHandler={this.onTakePhoto} />
        ) : (
          <div>
            <ImagePreview
              imageSrcHandler={
                imgDataUri ? imgDataUri : '/images/No_Image_Available.jpg'
              }
            />
            <button
              onClick={this.toggleCamera}
              className="camera-btn mr-3 mb-3 ml-4"
            >
              <i class="fas fa-camera text-white" />
            </button>
            <button
              className="send-document-btn text-white  mb-3"
              onClick={this.sendDocument}
            >
              Senden Dokument
            </button>
          </div>
        )}
      </div>
    );
  }
}
