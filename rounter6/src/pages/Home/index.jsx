import React from 'react'
import { Outlet } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'

export default function Home() {
  return (
    <div className="form">
      <h3>Home</h3>
      <div>
        <MyNavLink to="message">Message</MyNavLink>
        &nbsp;
        <MyNavLink to="news">News</MyNavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
