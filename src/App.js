import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DocumentUploader from './components/pages/DocumentUploader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DocumentUploader/>
      </div>
    );
  }
}

export default App;
