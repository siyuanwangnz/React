import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component {
    search = async () => {
        const { keyWordElement: { value: keyWord } } = this

        PubSub.publish('list', { isFirst: false, isLoading: true })

        try {
            const respones = await fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`)
            const data = await respones.json()
            PubSub.publish('list', { users: data.items, isLoading: false });
        } catch (err) {
            PubSub.publish('list', { isLoading: false, isErr: err.message });
        }
    }
    render() {
        return (
            <section>
                <h3>Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="Enter Name" />
                    &nbsp;&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
