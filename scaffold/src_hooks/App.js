import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Hello from './components/Hello'
import Welcome from './components/Welcome'

export default class App extends Component {

  render() {
    return (
      <div>
        <Hello />
        <hr/>
        <Welcome />
      </div>
    )
  }
}
