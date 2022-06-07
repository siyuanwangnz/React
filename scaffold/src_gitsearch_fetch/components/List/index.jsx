import React, { Component } from 'react'
import list from './index.module.css'
import PubSub from 'pubsub-js'

export default class List extends Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        isErr: ''
    }

    componentDidMount() {
        this.token = PubSub.subscribe('list', (msg, data) => {
            this.setState(data)
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        return (
            <ul className={list.list}>
                {
                    this.state.isFirst ? <h2>Enter and search</h2> :
                        this.state.isLoading ? <h2>Loading...</h2> :
                            this.state.isErr ? <h2>{this.state.isErr}</h2> :
                                this.state.users.map((user) => {
                                    return (
                                        <div key={user.id}>
                                            <a href={user.html_url} target="_blank" rel="noreferrer">
                                                <img alt="Profile" src={user.avatar_url} style={{ width: '80px' }} />
                                            </a>
                                            <p>{user.login}</p>
                                        </div>
                                    )
                                })
                }
            </ul>
        )
    }
}
