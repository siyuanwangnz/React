import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Info from './Info'
import { Link } from 'react-router-dom'

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: 'message01' },
            { id: '02', title: 'message02' },
            { id: '03', title: 'message03' }
        ]
    }
    replaceShow = (id, title) => {
        this.props.history.replace({ pathname: `/home/message/info`, state: { id: id, title: title } });
    }
    pushShow = (id, title) => {
        this.props.history.push({ pathname: `/home/message/info`, state: { id: id, title: title } });
    }
    input = React.createRef()
    render() {
        return (
            <div className='form'>
                <ul>
                    {
                        this.state.messageArr.map((msg) => {
                            return (
                                <li key={msg.id}>
                                    <Link to={{ pathname: `/home/message/info`, state: { id: msg.id, title: msg.title } }}>{msg.title}</Link>
                                    <button onClick={() => { this.pushShow(msg.id, msg.title + "push") }}>push</button>
                                    <button onClick={() => { this.replaceShow(msg.id, msg.title + "replace") }}>replace</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <Route path="/home/message/info" component={Info} />
                <hr />
                <button onClick={this.props.history.goBack}>back</button>
                <button onClick={this.props.history.goForward}>forward</button>
                <input type="number" ref={this.input}></input>
                <button onClick={() => this.props.history.go(this.input.current.value)}>go</button>
            </div >
        )
    }
}
