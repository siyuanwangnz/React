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
                <li>ID: {this.props.match.params.id}</li>
                <li>TITLE: {this.props.match.params.title}</li>
                <li>CONTENT: {Data.find((obj) => {
                    return obj.id === this.props.match.params.id
                }).content}</li>
            </ul>
        )
    }
}
