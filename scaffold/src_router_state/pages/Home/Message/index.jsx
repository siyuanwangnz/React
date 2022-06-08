import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Info from './Info'
import { NavLink } from 'react-router-dom'

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: 'message01' },
            { id: '02', title: 'message02' },
            { id: '03', title: 'message03' }
        ]
    }
    render() {
        return (
            <div className='form'>
                <ul>
                    {
                        this.state.messageArr.map((msg) => {
                            return (
                                <li key={msg.id}>
                                    <NavLink replace to={{ pathname: `/home/message/info`, state: { id: msg.id, title: msg.title } }}>{msg.title}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <Route path="/home/message/info" component={Info} />
            </div>
        )
    }
}
