import logo from './logo.svg';
import './App.css';

// type rce to get class based component function

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}

export default App

