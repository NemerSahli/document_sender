import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header'
import DocumentUploader from './components/pages/DocumentUploader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DocumentUploader/>
      </div>
    );
  }
}

export default App;
