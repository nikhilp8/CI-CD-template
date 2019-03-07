import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount(){
    axios.get('/api/test')
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Hi, this is Nikhil Ponugoti
        </header>
      </div>
    );
  }
}

export default App;
