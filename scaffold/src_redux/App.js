import './App.css';
import React, { Component } from 'react'
import Counter from './containers/Counter'
import Person from './containers/Person'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Counter />
        <hr />
        <Person />
      </div>
    )
  }
}
