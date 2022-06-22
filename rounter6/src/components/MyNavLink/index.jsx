import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        return (
            //light define in the public/index.html
            <NavLink className={({ isActive }) => isActive ? 'light' : ''} {...this.props} />
        )
    }
}
