import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <section>
                <h3>Search Github Users</h3>
                <div>
                    <input type="text" placeholder="Enter Name" />&nbsp;&nbsp;<button>Search</button>
                </div>
            </section>
        )
    }
}
