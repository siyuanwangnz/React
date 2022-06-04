import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    search = () => {
        const { keyWordElement: { value: keyWord } } = this
        axios.get(
            `http://localhost:3000/api1/search/users?q=${keyWord}`
        ).then(
            response => console.log("Successful", response.data),
            err => console.error(err)
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
