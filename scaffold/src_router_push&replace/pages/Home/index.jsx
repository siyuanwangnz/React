import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import Message from './Message'
import News from './News'

export default class Home extends Component {
  render() {
    return (
      <div className="form">
        <h3>Home</h3>
        <div>
          <MyNavLink to="/home/message">Message</MyNavLink>
          &nbsp;
          <MyNavLink to="/home/news">News</MyNavLink>
        </div>
        <div>
          <Switch>
            <Route path="/home/message" component={Message} />
            <Route path="/home/news" component={News} />
            <Redirect to="/home/message" />
          </Switch>
        </div>

      </div>
    )
  }
}
