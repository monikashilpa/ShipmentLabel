import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormContainer from './containers/FormContainer';

class App extends Component {
  render() {
    return (
      <div className="container outline-border" >
        <FormContainer />
      </div>
    );
  }
}

export default App;
