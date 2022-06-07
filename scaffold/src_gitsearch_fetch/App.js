import './App.css';
import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrap">
          <Search />
          <List />
        </div>
      </div>
    )
  }
}
