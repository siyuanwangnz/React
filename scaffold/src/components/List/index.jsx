import React, { Component } from 'react'
import list from './index.module.css'

export default class List extends Component {
    render() {
        return (
            <ul className={list.list}>
                {
                    this.props.isFirst ? <h2>Enter and search</h2> :
                        this.props.isLoading ? <h2>Loading...</h2> :
                            this.props.isErr ? <h2>{this.props.isErr}</h2> :
                                this.props.users.map((user) => {
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
