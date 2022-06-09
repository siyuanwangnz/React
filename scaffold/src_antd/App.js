import './App.css';
import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <Header />
        </div>
        <div>
          <MyNavLink to="/home">Home</MyNavLink>
          &nbsp;
          <MyNavLink to="/about">About</MyNavLink>
        </div>
        <div>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </div>
    )
  }
}
