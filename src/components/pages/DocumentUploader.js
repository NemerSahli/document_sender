import React, { Component } from 'react';
import CameraEngel from '../pages/CameraEngel';
import ImagePreview from '../layout/ImagePreview';
import axios from 'axios';
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

  sendDocument = async () => {
    if (this.state.imgDataUri) {
      let newDocument = {
        userName: 'Mieter Engel',
        content: this.state.imgDataUri
      };
      try {
        const response = await axios({
          method: 'post',
          url: 'http://localhost:8000/mail/send',
          data: newDocument,
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (response.data) {
          console.log('items', response.data);
        }
      } catch (err) {
        console.log('sending document error:' + err);
      }
    } else {
      alert('please take a photo for the document you want to send...');
    }
  };

  render() {
    const { imgDataUri, displayCamera } = this.state;
    return (
      <div>
        {displayCamera ? (
          <CameraEngel onTakePhotoHandler={this.onTakePhoto} />
        ) : (
          <div className="document-uploader">
            <ImagePreview
              imageSrcHandler={
                imgDataUri ? imgDataUri : '/images/default-camera-image.png'
              }
            />
            <div
              className="controller
             "
            >
              <div className="row justify-align-content-around">
                <button
                  className="col-4 send-document-btn text-dark fa-2x"
                  onClick={this.sendDocument}
                >
                  Abbruch
                </button>
                <button
                  onClick={this.toggleCamera}
                  className=" col-4 camera-btn"
                >
                  <i className="fas fa-circle fa-3x text-danger" />
                </button>
                <button
                  className="col-4 send-document-btn fa-2x"
                  onClick={this.sendDocument}
                >
                  Fertig
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
