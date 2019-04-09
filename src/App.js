import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DocumentUploader from './components/pages/DocumentUploader';
import config from './config.json'

class App extends Component {
  constructor(props) {
    super(props);
    window.MieterBackend = config.backend;
    window.MieterHost = config.host;
  }
  render() {
    return (
      <div className="App">
        <DocumentUploader/>
      </div>
    );
  }
}

export default App;
