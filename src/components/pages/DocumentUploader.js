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
    if(this.state.imgDataUri){

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
    }else{
      alert('please take a photo for the document you want to send...')
    }
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
              <i className="fas fa-camera text-white" />
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
