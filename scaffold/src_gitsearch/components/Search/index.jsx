import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    search = () => {
        const { keyWordElement: { value: keyWord } } = this

        this.props.update({ isFirst: false, isLoading: true })
        axios.get(
            `http://localhost:3000/api1/search/users?q=${keyWord}`
        ).then(
            response => {
                this.props.update({ users: response.data.items, isLoading: false });
            },
            err => {
                this.props.update({ isLoading: false, isErr: err.message });
            }
        )
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
