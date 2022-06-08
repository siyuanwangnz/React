import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Info from './Info'
import MyNavLink from '../../../components/MyNavLink'

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
                                    <MyNavLink to={`/home/message/info/${msg.id}/${msg.title}`}>{msg.title}</MyNavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <Route path="/home/message/info/:id/:title" component={Info} />
            </div>
        )
    }
}
