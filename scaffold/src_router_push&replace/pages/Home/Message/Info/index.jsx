import React, { Component } from 'react'

const Data = [
    { id: '01', content: 'This is 01' },
    { id: '02', content: 'This is 02' },
    { id: '03', content: 'This is 03' }
]

export default class Info extends Component {
    render() {
        return (
            <ul>
                <li>ID: {this.props.location.state.id}</li>
                <li>TITLE: {this.props.location.state.title}</li>
                <li>CONTENT: {Data.find((obj) => {
                    return obj.id === this.props.location.state.id
                }).content}</li>
            </ul>
        )
    }
}
