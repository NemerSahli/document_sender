import React, { Component } from 'react';
import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

class CameraEngel extends Component {
  onTakePhoto(imgDataUri) {
    this.props.onTakePhotoHandler(imgDataUri);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Camera
        onTakePhoto={dataUri => {
          this.onTakePhoto(dataUri);
        }}
        idealFacingMode={FACING_MODES.ENVIRONMENT}
        imageCompression={1}
        idealResolution={{width: 595, height: 842}}
        isMaxResolution={false}
        isImageMirror={false}
        sizeFactor={1}
        isFullscreen={true}
      />
    );
  }
}

export default CameraEngel;
