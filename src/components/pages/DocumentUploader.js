import React, { Component } from 'react';
import CameraEngel from '../pages/CameraEngel';
import ImagePreview from '../layout/ImagePreview';
import axios from 'axios';
import MessagesFeedback from '../layout/MessagesFeedback';
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
    this.resetState();
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
          url: window.MieterBackend + '/mail/send',
          data: newDocument,
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (response.data) {
          console.log('items', response.data);
          if (response.data.error === 0) {
            this.setState({
              imgDataUri: null,
              emailDelivered: true,
              sendingMailFailedMessage: ''
            });
          } else {
            this.setState({
              sendingMailFailedMessage: response.data.message
            });
          }
        }
      } catch (err) {
        console.log('sending document error:' + err);
      }
    } else {
      this.setState({
        emailDelivered: false,
        sendingMailFailedMessage: 'Please take a photo first'
      });
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
    return (
      <div>
        {this.state.displayCamera ? (
          <CameraEngel onTakePhotoHandler={this.onTakePhoto} />
        ) : (
          <div>
            <div className="img-preview">
              <ImagePreview imgDataUri={this.state.imgDataUri} />
            </div>

            <div className="controller">
              <div className="controller-body">
                <MessagesFeedback {...this.state} />

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
          </div>
        )}
      </div>
    );
  }
}
