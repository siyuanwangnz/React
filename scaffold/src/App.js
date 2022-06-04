import './App.css';
import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    isErr: ''
  }
  update = (state) => {
    this.setState(state)
  }
  render() {
    return (
      <div className="container">
        <div className="wrap">
          <Search update={this.update} />
          <List {...this.state} />
        </div>
      </div>
    )
  }
}
