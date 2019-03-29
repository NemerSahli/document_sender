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

  resetState = () => {
    this.setState({
      imgDataUri: null,
      displayCamera: false,
      emailDelivered: false,
      sendingMailFailedMessage: ''
    });
  };

  render() {
    const { imgDataUri, displayCamera } = this.state;
    return (
      <div>
        {displayCamera ? (
          <CameraEngel onTakePhotoHandler={this.onTakePhoto} />
        ) : (
          <div>
            <div className="img-preview">
              <ImagePreview imgDataUri={this.state.imgDataUri} />
            </div>

            <div className="controller">
              <div className="row justify-content-between">
                <div className="col-4 text-center">
                  <button
                    className="abbruch-btn text-dark fa-2x p-2"
                    onClick={this.resetState}
                  >
                    Abbruch
                  </button>
                </div>
                <div className="col-4 text-center">
                  <button onClick={this.toggleCamera} className="camera-btn">
                    <i className="fas fa-circle fa-3x text-danger" />
                  </button>
                </div>
                <div className="col-4 text-center  pl-0 ml-0">
                  <button
                    className="fertig-btn fa-2x p-2 pl-0 ml-0"
                    onClick={this.sendDocument}
                  >
                    Fertig
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
